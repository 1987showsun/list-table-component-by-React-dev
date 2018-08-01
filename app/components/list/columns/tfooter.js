import React    from 'react';
import NP       from 'number-precision';

export default class Total extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            totalSwitch : props.totalSwitch,
            totalObj    : props.totalObj,
            tHeadKey    : props.tHeadKey,
            data        : props.data,
            fixed       : props.fixed
        }
    }

    componentDidMount() {
        test(this.state.tHeadKey,this.state.data);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            totalSwitch : nextProps.totalSwitch,
            totalObj    : nextProps.totalObj,
            tHeadKey    : nextProps.tHeadKey,
            data        : nextProps.data,
            fixed       : nextProps.fixed
        })
    }

    render(){
        const fixedClass = this.state.fixed.some((item,i)=>{
            return item == 'tfooter';
        })?(
            "sticky"
        ):(
            ""
        );

        if( this.state.totalSwitch==true ){
            return(
                this.state.totalObj['text']!=""?(
                    <li className={`list-total ${fixedClass}`}>{this.state.totalObj['text']}</li>
                ):(
                    this.state.totalObj['switch']==true?(
                        <li className={`list-total ${fixedClass}`}>{ test(this.state.tHeadKey,this.state.data) }</li>
                    ):(
                        <li className={`list-total ${fixedClass}`}>--</li>
                    )
                )
            );
        }else{
            return null;
        }
    }
}

const test = (key,data) => {
    let sum = 0;
    const nuArray = data.map((item,i)=>{
        if( !isNaN(Number(item[key])) ){
            if (item[key]) {
                sum = NP.plus(sum, item[key]);
            }
        }
    });

    if( sum%1===0 ){
        sum = sum+'.00';
    }

    return sum;
}