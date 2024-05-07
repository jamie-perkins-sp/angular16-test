import { Component } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';

type EditorInitProps = NonNullable<EditorComponent['init']>;

@Component({
  selector: 'app-tiny-playground',
  templateUrl: './tiny-playground.component.html',
  styleUrls: ['./tiny-playground.component.scss']
})
export class TinyPlaygroundComponent {
  init: EditorInitProps = {
    plugins: ['help', 'code'],
    setup: (editor) => {
      this.editor = editor;
      editor.on('init', () => {
        console.log(editor.id, 'init');
      });
      editor.on('remove', () => {
        console.log(editor.id, 'remove');
      });
    },
    noneditable_class: 'nonedit',
    editable_class: 'editcontent'
  };
  editor: EditorComponent['editor'] | null = null;
  show = true;
  toolbar = 'undo redo | code | table';
  initialValue = '<div class="nonedit"><p>You can\'t edit this</p></div><div class="editcontent"><p>This you can</p>'

  reload() {
    this.initialValue = this.editor!.getContent();
    this.show = false;

    // Changes to config and whatever else is needed:
    this.init.plugins = ['help', 'table', 'code'];
    this.init.toolbar = 'undo redo | code | table';

    setTimeout(() => {
      this.show = true;
    }, 1);
  }
}
