import PropTypes from 'prop-types'
import * as React from 'react'
import {AccordionWrapper} from '@website/components/accordion/styled'

export  class Accordion extends React.Component {
    static propTypes = {
        headerClass: PropTypes.string,
        contentWrapperClass: PropTypes.string,
        isOpen: PropTypes.bool,
        onToggle: PropTypes.func,
        headerChildren: PropTypes.func,
    }

    constructor(props: any) {
        super(props)
        this.state = {
            open: !!props.isOpen,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isOpen !== nextProps.isOpen) {
            this.toggle()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.open !== this.state.open && this.props.onToggle) {
            this.props.onToggle(this.state.open)
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open,
            }
        })
    }

    render() {
        return (
          <AccordionWrapper>

          <div
              onClick={this.toggle}
              className={
                this.state.open
                ? this.props.headerClass ? 'Accordion__header ' + this.props.headerClass : 'Accordion__header'
                : 'Accordion__header Accordion__header--collapsed'
              }
              >
              {this.props.title}
              {''}
              <br/>
              {this.props.price}
              {this.props.headerChildren ? this.props.headerChildren(this.state.open) : null}
          </div>
          <div className={
            this.state.open
            // tslint:disable-next-line:max-line-length
            ? this.props.contentWrapperClass ? 'Accordion__body ' + this.props.contentWrapperClass : 'Accordion__body'
            : 'Accordion__body Accordion__body--collapsed'
          }>
              {this.props.children}
          </div>
          </AccordionWrapper>
        )
    }
}

export default Accordion
