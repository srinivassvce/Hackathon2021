package com.siemens.dx.hackathon.smarthealthsystem.exceptions;

public
class MethodArgumentNotValidException extends RuntimeException{

  private static final long serialVersionUID = -3003653830028298123L;

  public MethodArgumentNotValidException(String message) {
    super(message);
  }
}
