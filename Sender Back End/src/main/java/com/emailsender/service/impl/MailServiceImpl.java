package com.emailsender.service.impl;

import com.emailsender.service.MailService;
import lombok.Data;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Data
@Service
public class MailServiceImpl implements MailService {

    private final JavaMailSender mailSender;
    public MailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    @Override
    public void sendEmail(String to, String subject, String message) {
        SimpleMailMessage  simpleSendMessage = new SimpleMailMessage();
        simpleSendMessage.setFrom("ranjeetsinha009143@gmail.com");
        simpleSendMessage.setTo(to);
        simpleSendMessage.setSubject(subject);
        simpleSendMessage.setText(message);

        this.mailSender.send(simpleSendMessage);
    }
}
