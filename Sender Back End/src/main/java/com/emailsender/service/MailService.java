package com.emailsender.service;

import org.springframework.stereotype.Repository;

@Repository
public interface MailService {
    public void sendEmail(String to,  String subject,  String message);

}
