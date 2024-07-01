import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableColumns: string[] = ['ID', 'Name', 'Age', 'Email', 'Actions'];
  tableData: any[] = [
    { ID: 1, Name: 'John Doe', Age: 30, Email: 'john@example.com', Actions: '<button type="button">View</button>' },
    { ID: 2, Name: 'Jane Smith', Age: 25, Email: 'jane@example.com', Actions: '<button type="button">View</button>' },
    { ID: 3, Name: 'Sam Wilson', Age: 28, Email: 'sam@example.com', Actions: '<button type="button">View</button>' }
  ];
}
