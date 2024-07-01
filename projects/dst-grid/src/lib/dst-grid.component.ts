import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'dst-grid',
  templateUrl: './dst-grid.component.html',
  styleUrls: ['./dst-grid.component.scss']
})
export class DstGridComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }


  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
