package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;

public
class LoginParameter implements Serializable {

  private static final long serialVersionUID = 1L;

  private String email;
  private String password;

  public
  String getEmail() {
    return email;
  }

  public
  String getPassword() {
    return password;
  }
}
