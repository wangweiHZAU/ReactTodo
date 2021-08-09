export interface ITodo {
  content: string;
  finished: boolean;
}

export class Todo implements ITodo {
  content: string;
  finished: boolean;
  el: HTMLElement;

  toJson() {
    return {
      content: this.content,
      finished: this.finished
    }
  }

  constructor(obj: ITodo) {
    this.content = obj.content;
    this.finished = obj.finished;
    this.el = null;
  }
}