package com.emailsender.controller;

import com.emailsender.model.MailResourceModel;
import com.emailsender.service.MailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@AllArgsConstructor
@RestController
@CrossOrigin
public class MailController {

    @Autowired
    private final MailService mailService;

    @PostMapping("/send-mail")
    public ResponseEntity sendEmail(@RequestBody MailResourceModel mailResourceModel){
        System.out.println(mailResourceModel.getTo() + " " + mailResourceModel.getSubject() + " " +  mailResourceModel.getMessage());
        mailService.sendEmail(mailResourceModel.getTo(), mailResourceModel.getSubject(), mailResourceModel.getMessage());
        return ResponseEntity.ok("successfully");
    }
}
