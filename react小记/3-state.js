/**
 * Created by Administrator on 2017/01/06 0006.
 */
import React,{ Component } from 'react';
class Counter extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);{/*在构造方法中绑定this，就不用担心当把这个方法单独提出来使用时改变this的指向了*/}
        this.state = {
            count : 0
        };
    }
    handleClick(e){
        e.preventDefault();
        {/*当组件内部使用库内置的 setState 方法时，该组件会尝试重新渲染*/}
        {/*setState 是一个异步方法，一个生命周期内所有的setState方法会合并操作*/}
        this.setState({
            count : count + 1
        });
    }
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <a href="#" onClick={this.handleClick}>更新</a>{/*通过点击‘更新’按钮不断地更新内部count的值*/}
            </div>
        );
    }
}
