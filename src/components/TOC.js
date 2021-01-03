import { Component } from 'react';

class TOC extends Component{
    render(){
      var lists=[];
      var data=this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
          <li key={data[i].id}>
            <a href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){ 
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); //여기서 e.target은 해당 이벤트가 발생하는 태그를 가르키고 있음
              //그렇기 때문에 e.target.dataset은 해당 태그가 가지고 있는 data를 저장하고 있고, 앞서 data-id에 저장한 정보를
              // e.target.dataset.id를 통해 접근할 수 있는 것임
            }.bind(this)}>
              {/* 매개변수를 전달하는 또 다른 방법
              <a href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(id, e){ //(1)에서 넘긴 인자는 함수를 정의할 때 첫번째 매개 변수로 들어오게 됨. 만약 
                  여러 개의 인자를 넘긴다면, 앞에서부터 순서대로 변수명을 작성하면 됨. 
                  e.preventDefault();
                  this.props.onChangePage(id);
                }.bind(this, data[i].id)}> //bind()함수에는 여러 개의 인자를 넘길 수 있음(1)
               */}
              {data[i].title}
            </a>
          </li>
          )
        i=i+1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;