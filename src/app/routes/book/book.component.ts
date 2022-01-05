import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  isVisible = false;
  @ViewChild('st') private st!: STComponent;
  users: STData[] = [];
  columns: STColumn[] = [
    { title: '编号', index: '_id' },
    { title: '姓名', index: 'name', render: 'nameTpl' },
    { title: '年龄', index: 'age', render: 'ageTpl' },
    { title: '性别', index: 'gender', render: 'genderTpl' },
    // { title: '启用', index: 'enabled', render: 'enabledTpl' },
    {
      title: '操作',
      buttons: [
        {
          text: `修改`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: `保存`,
          iif: i => i.edit,
          click: i => {
            // this.updateEdit(i, false)；
            this.submit(i);
            // console.log(i);
          }
        },
        {
          text: `取消`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false)
        },
        {
          text: '删除',
          pop: {
            title: '确定删除吗?',
            okType: 'danger',
            overlayClassName: 'backut'
          },
          click: i => {
            this.delete(i._id);
            console.log(i._id);
          }
        },
        {
          text: '新增'
        }
      ]
    }
  ];

  constructor(private msg: NzMessageService, private http: _HttpClient) {}

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }

  public query(): void {
    this.http.get(`http://localhost:4000/teacher`).subscribe(teachers => {
      this.users = teachers.res.datas;
    });
  }

  public delete(id: string): void {
    this.http.delete(`http://localhost:4000/teacher/${id}`).subscribe(() => {
      this.query();
    });
  }

  public create(data: any): void {
    this.http.post(`http://localhost:4000/teacher`, data).subscribe(() => {});
  }

  public ngOnInit(): void {
    this.query();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
