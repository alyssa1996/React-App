import { Component } from 'react';

class Banner extends Component{
    render(){
        return(
        <div style={{blockSize:128, padding:64, backgroundColor:'tomato'}}>
            <p style={{textAlign:'center', fontWeight:'bold'}}>VECO = Vegan + Eco</p>
            <p style={{textAlign:'center'}}>베코는 'Vegan for Everyone'이라는 생각에서 출발하였습니다.<br></br>
                비건이라서 찾는 것이 아니라, 음식이 맛있어서, 제품이 좋아서 찾았으면 좋겠다는 바람으로 시작했습니다.
            </p>
      </div>
        )
    }
}

export default Banner;