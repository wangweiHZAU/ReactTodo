class App extends React.Component {
  state = {
    content: '',
    finish: false,
    list: JSON.parse(localStorage.getItem("__data__")) == null? [] : JSON.parse(localStorage.getItem("__data__"))
  }  

  render() {
    return (
      <React.Fragment>
        <header>
          <div className="title">TS Todo</div>
          <input
            onChange={(e) => {this.setState({
              content : e.target.value
            })}} 
            onKeyDown={this.keyDown.bind(this)}
            // onKeyDown={(e) => {
            //     if (e.key === 'Enter' && this.state.content !== ''){
            //       // this.state.list.push({c: this.state.content, s: false}) // add delay
            //       let list = this.state.list;
            //       list.push({c: this.state.content, s: false});
            //       this.setState(list = list);
            //       this.put();
            //     }
            //   }
            // }
            id="input"
            type="text"
            className="input"
            placeholder="What needs to be done?"
            autoComplete="off"
          />
        </header>
        <section id="todos">
            {
              this.state.list.map((item, index) =>  (
                <div key={index} className={!item.s? "todo-item": "todo-item todo-finished"}>
                  <i className='iconfont icon-checkbox' onClick={this.finished.bind(this, index)}></i>
                  <span className='todo-title'>{item.c}</span>
                  <i className='iconfont icon-delete' onClick={this.delete.bind(this, index)}></i>
                </div>
              ))            
            }            
        </section>
      </React.Fragment>
    )
  }

  keyDown(e) {
    if (e.key === 'Enter' && this.state.content !== ''){
      // this.state.list.push({c: this.state.content, s: false}) // add delay
      let list = this.state.list;
      list.push({c: this.state.content, s: false});
      this.setState(list = list);
      this.put(); 
    }
  }

  delete(index) {
    // this need to add a delete function
    this.state.list.splice(index, 1);
    this.setState({
      list : this.state.list
    });
    this.put();
  }

  finished(index) {
    // this need to add a check function
    // this.state.list[index].s = !this.state.list[index].s;
    this.state.list[index].s = !this.state.list[index].s;
    this.setState({
      list: this.state.list
    })
    this.put();
  }

  put = () => {
    localStorage.setItem("__data__",JSON.stringify(this.state.list))
  }

}


// import { ITodo, Todo} from './types.js'

// let todos: Todo[] = [];
// let list = document.getElementById('app');

// interface State {
//   contents: ITodo[];
//   finish: [];
// }
// class App extends React.Component {
//   state: State = {
//     contents: [],
//     finish: []
//   }
  

  // createEl(item: ITodo) {
  //   let iconName = 'todo-item';
  //   let checkbox = 'iconfont icon-checkbox';
  //   let content = 'todo-title';
  //   let close = 'iconfont icon-delete';
  //   if (item.finished === true) iconName += ' todo-finished';
  //   return (
  //     <div className={iconName}>
  //       <i className={checkbox} onClick={()=>{this.toggleItem(item)}}></i>
  //       <span className={content}>{item.content}</span>
  //       <i className={close} onClick={()=>{this.delItem(item)}}></i>
  //     </div>
  //   )
  // }

  // dump() {
  //   localStorage.setItem('todos', JSON.stringify(this.state.contents))
  // }

//   addItem(item: ITodo, isInit = false) {
//     this.state.contents.push(item);
//     if (isInit === false) this.dump();
//     return this.createEl(item);
//   }

//   toggleItem(item: ITodo) {
//     item.finished =　!item.finished;
//     let className = 'todo-item';
//     if (item.finished === true) className += ' todo-finished';
//     // item.el.className = className;
//     this.dump()
//   }

//   delItem(item: ITodo) { 
//     let index = this.state.contents.indexOf(item);
//     this.state.contents.splice(index, 1);
//     this.setState({
//       contents: this.state.contents
//     })
//     this.dump();
//   }

//   enter() {
//     let input = document.getElementById('input') as HTMLInputElement;
//     input.addEventListener('keydown', e=> {
//       let value = input.value.trim();
//       if (e.key === 'Enter' && value !== ''){
//         let todo = new Todo({ content: value, finished: false});
//         this.addItem(todo);
//         input.value = '';
//       }
//     })
//   }

//   cache() {
//     let _todos = localStorage.getItem('todos');
//     if (_todos) {
//       try {
//         let items: ITodo[] = JSON.parse(_todos);
//         for (let item of items) {
//           let todo = new Todo(item);
//           this.addItem(todo, true);
//         }
//       } catch (error) {
//         console.error('invalid cache');
//       }
//     }
//   }
  
//   render() {
//     return (
//       <React.Fragment>
//         {
          
//         }
//       </React.Fragment>
//       )
//   }

//   // state = {
//   //   count: 0
//   // }
//   // increase() {
//   //   this.setState({
//   //     count: this.state.count + 1
//   //   })
//   // }
//   // render() {
//   //   return <h1>React Template</h1>
//   //   return (
//   //     <div>
//   //       <span>{this.state.count}</span>
//   //       <button onClick={this.increase.bind(this)}>Increase</button>
//   //     </div>
//   //   )
//   // }
// }

ReactDOM.render(<App />, document.getElementById('app'))