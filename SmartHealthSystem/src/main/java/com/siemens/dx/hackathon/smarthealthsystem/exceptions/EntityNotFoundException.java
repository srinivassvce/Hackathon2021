package com.siemens.dx.hackathon.smarthealthsystem.exceptions;

public
class EntityNotFoundException extends RuntimeException {

  private static final long serialVersionUID = 1422498219999897796L;

  public EntityNotFoundException(String message) {
    super(message);
  }
}
