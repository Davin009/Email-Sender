package com.emailsender.model;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class MailResourceModel {
    private String to;
    private String subject;
    private  String message;
}
