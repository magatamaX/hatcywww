import css from './style.scss'
import mgnSmoothScroll from 'mgn-smooth-scroll';
import { connect } from 'react-redux'
import { showPageTopBtn, hidePageTopBtn } from '../../../store'
import React from 'react'
import Link from 'next/link'

interface Props {
    pageTopBtn: boolean,
    showPageTopBtn: Function,
    hidePageTopBtn: Function
}

class Pagetopbutton extends React.Component<Props> {

    constructor( props: Props ) {
        super(props)
    }

    private smoothScroll = '';

    ani() {
        const target = document.getElementById('footer')

        if ( !target ) {
            return
        }

        const callback = ( entries: any ) => {
            entries.forEach((entry: any) => {
                if ( entry.isIntersecting ) {
                    this.props.showPageTopBtn()
                } else {
                    this.props.hidePageTopBtn()
                }
            })
        }
        const observer = new IntersectionObserver(callback)
        observer.observe(target)
    }

    componentDidMount() {

        this.ani()
        this.smoothScroll = new mgnSmoothScroll(
            ".j-smooth-scroll-pagetop",
            {
                easing: "easeOutQuint",
                ignore: ".ignore",
                posFix: 0,
                blank: true,
            }
          );
      
          this.smoothScroll['ScrollEnd'] = function(){}

    }

    componentWillUnmount() {

        this.smoothScroll = ''
    
    }

    render() {
        return (
            <div className={
                this.props.pageTopBtn
                ? `${css.pagetopbutton} ${css.on}`
                : `${css.pagetopbutton}`
            }>
                <Link href="#pagetop">
                    <a className={`${css.button} j-smooth-scroll-pagetop`}>
                        <img src="/static/images/common/pagetop.png" alt="PAGE TOP" />
                    </a>
                </Link>
            </div>
        )
    }
}


const mapStateToProps = ({ pageTopBtn } : { pageTopBtn: boolean }) => {
    return {
        pageTopBtn
    }
}
const mapDispatchToProps = {
    showPageTopBtn, hidePageTopBtn
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagetopbutton)