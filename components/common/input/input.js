"use client";
import React, { Component } from "react";
import styles from "./input.module.css";
import PropTypes from "prop-types";

//fuction based component
export default function Input({
  chidren,
  size = "lg",
  type,
  label,
  onChange,
  value,
}) {
  if (size == "lg") {
    return (
      <div className={styles.inputComp}>
        <label className={styles.label}>{label}</label>
        <input
          className={styles.large}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  if (size == "md") {
    return (
      <div>
        <label>{label}</label>
        <input
          className={styles.medium}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

//class based component

export class CustomInput extends React.Component {
  super(props) {}
  // constructor(props) {
  //   onchange: {
  //     this.props.onChange;
  //   }
  //   size:{this.props.size}
  // }
  render() {
    if (this.props.size == "lg") {
      return (
        <div className={styles.inputComp} >
          <label className={styles.label}>{this.props.label}</label>
          <input
            className={styles.large}
            type={this.props.type}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      );
    }
    if (this.props.size == "md") {
      return (
        <div>
          <label>{this.props.label}</label>

          <input
            className={styles.medium}
            type={this.props.type}
            onChange={this.props.onChange}
          />
        </div>
      );
    }
  }
}

Input.prototype = {
  size: PropTypes.oneOf[("lg", "md", "sm")],
  type: PropTypes.string,
  children: PropTypes.string,
  label: PropTypes.string,
};
