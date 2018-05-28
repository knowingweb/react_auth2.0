import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import styles from './CollapseCmp.css'

import ArrowFoward from '../../../img/arrow-foward';

class CollapseCmp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { title, children, className, type } = this.props;
    return (
      <div className={[styles.CollapseCmp,
      (this.state.collapse ? styles["CollapseCmp--open"] : ""),
        (type == "secondary" ? styles["CollapseCmp--secondary"] : ""),
        (type == "last" ? styles["CollapseCmp--last"] : ""),
      className].join(" ")}>
        <Button onClick={this.toggle} className={styles.CollapseCmp__btn}>
          { title }
          <ArrowFoward className={styles.CollapseCmp__arrow} ariaLabel='>' />
        </Button>
        <Collapse isOpen={this.state.collapse} className={styles.CollapseCmp__content}>
          { children }
        </Collapse>
      </div>
    );
  }
}

export default CollapseCmp;
