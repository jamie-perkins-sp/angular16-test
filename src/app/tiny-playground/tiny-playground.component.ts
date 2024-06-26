import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';

type EditorInitProps = NonNullable<EditorComponent['init']>;

@Component({
  selector: 'app-tiny-playground',
  templateUrl: './tiny-playground.component.html',
  styleUrls: ['./tiny-playground.component.scss'],
})
export class TinyPlaygroundComponent {
  group = new FormGroup({
    message: new FormControl<string>(''),
  });

  init: EditorInitProps = {
    plugins: ['help', 'table', 'code'],
    toolbar: 'undo redo | code | table',
    setup: (editor) => {
      this.editor = editor;
      editor.on('init', () => {
        console.log(editor.id, 'init');
      });
      editor.on('remove', () => {
        console.log(editor.id, 'remove');
      });
      const baseRgx = /(\#((foreach|if|elseif|else|set|end|parse|include|break|stop)|\{else\})\s?(\([!$&<>{}.=-\w\s\(\)\"]+\))?)/g;

      editor.on('BeforeSetContent', (e) => {
        // comment all velocity tags
        e.content = e.content.replace(baseRgx, '<!--$1-->');
        console.log('comment:', e.content);
      });

      editor.on('GetContent', (e) => {
        // uncomment all velocity tags
        const rgx = new RegExp(`\<\!--(${baseRgx.source})--\>`, 'g');
        const result = e.content = e.content.replace(rgx, '$1\n');
        console.log('uncomment', result);
        e.content = result;
      });
    },
    // noneditable_class: 'nonedit',
    // editable_class: 'editcontent',
    // noneditable_regexp: [/\#\s?(foreach|if|set|end)\s?\(.*\)?/g],
    // valid_children: '+table[style|#foreach|#if|#set|#end], +tr[style|#foreach|#if|#set|#end], ',
    // extended_valid_elements: '#foreach[*],#if[*],#set[*],#end[*]',
    init_instance_callback: this.tinyMceInit(),
  };
  editor: EditorComponent['editor'] | null = null;
  show = true;


  submit() {
    console.log('form value', this.group.value.message);
    console.log('editor value', this.editor!.getContent());
  }

  tinyMceInit() {
    this.group.setValue({
      message:
        '<p>Dear user,</p>' +
        '#if (!${searchResults.isEmpty()})' +
        '<table>' +
        '#set ($isHeader = true)' +
        '#foreach ($previewRow in ${searchResults.get($documentType).get("preview")})' +
        '<tr>' +
        '#foreach ($previewCell in ${previewRow})' +
        '#if ($isHeader)' +
        '<th>${previewCell}</th>' +
        '#else' +
        '<td>${previewCell}</td>' +
        '#end' +
        '#end' +
        '</tr>' +
        '#end' +
        '</table>',
    });
    return undefined;
  }
}
