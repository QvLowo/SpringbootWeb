package com.qvl.springbootweb.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BmiDto {
    private double height;
    private double weight;
    private double  bmi;
    private String result;
}
