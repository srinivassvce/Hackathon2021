package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.util.Date;

public
class NotificationModel {
  Date timestamp;

  public
  Date getTimestamp() {
    return timestamp;
  }

  public
  void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }

  public
  String getUpdate() {
    return update;
  }

  public
  void setUpdate(String update) {
    this.update = update;
  }

  String update;
}
