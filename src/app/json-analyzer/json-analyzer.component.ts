import { Component } from '@angular/core';
import templates from './json/templates.json';

@Component({
  selector: 'app-json-analyzer',
  templateUrl: './json-analyzer.component.html',
  styleUrls: ['./json-analyzer.component.scss']
})
export class JsonAnalyzerComponent {

  contructor() {

  }

  handleJson() {
    console.log('templates', templates)
    const rgx = new RegExp(/\#(foreach|if)/g);
    let foundInEmailCount = 0
    let foundInSlackCount = 0
    let foundInTeamsCount = 0
    let emailCount = 0
    let slackCount = 0
    let teamsCount = 0
    templates.forEach((template) => {
      let body = template.body ? template.body : template.slackTemplate ? template.slackTemplate.blocks : template.teamsTemplate ? template.teamsTemplate.messageJson : '';
      const matches = body.match(rgx);
      if (template.body) {
        emailCount++
        if (matches) {
          foundInEmailCount++
        }
      }
      if (template.slackTemplate) {
        slackCount++
        if (matches) {
          foundInSlackCount++
        }
      }
      if (template.teamsTemplate) {
        teamsCount++
        if (matches) {
          foundInTeamsCount++
        }
      }
    })
    console.log('total templates', templates.length)
    console.log('emailCount', emailCount, 'foundInEmailCount', foundInEmailCount)
    console.log('slackCount', slackCount, 'foundInSlackCount', foundInSlackCount)
    console.log('teamsCount', teamsCount, 'foundInTeamsCount', foundInTeamsCount)
    console.log('total', emailCount + slackCount + teamsCount)
  }
}
