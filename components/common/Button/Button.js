"use client";
import React, { Children } from "react";
import styles from "./button.module.css";
import Text from "../text/text";

export default function Button({ label, onClick, color, children, type ,size}) {
  if (size === "lg") {
    return (
      <button className={styles.large} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
  if (size === "md") {
    return (
      <button className={styles.medium} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
  if (size === "sm") {
    return (
      <button className={styles.small} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
}

export class CustomButton extends React.Component {
  super(props) {}
  render() {
    if (this.props.size === "lg") {
      return (
        <button
          className={styles.large}
          onClick={this.props.onClick}
          type={this.props.type}
        >
          {this.props.children}
        </button>
      );
    }
    if (this.props.size === "md") {
      return (
        <button className={styles.medium} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  }
}
