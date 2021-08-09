# 作业思路和问题
## 思路1：将给的demo利用 react 重写
> 结果： 大败！浪费大量时间，毫无成果。

## 思路2：逻辑全部使用 react 重写，完成必要功能
> 结果：4小时即可解决

## 问题
> - 在将onKeyDown事件绑定到对象时，出现不报错但是功能无法完成的bug
```typescript
// 内部
onKeyDown={e =>this.keyDown.bind(this, e)}

// 外部
keyDown(e) {
    if (e.key === 'Enter' && this.state.content !== ''){
      // this.state.list.push({c: this.state.content, s: false}) // add delay
      let list = this.state.list;
      list.push({c: this.state.content, s: false});
      this.setState(list = list);
      this.put(); 
    }
  }
```
> 问题解决：由于默认传递event事件，因此不需要额外指定参数`onKeyDown={this.keyDown.bind(this)}`