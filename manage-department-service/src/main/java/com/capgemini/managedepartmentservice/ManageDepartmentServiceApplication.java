package com.capgemini.managedepartmentservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@EnableEurekaClient
@Configuration
@ComponentScan
@EnableAutoConfiguration
@EntityScan
public class ManageDepartmentServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManageDepartmentServiceApplication.class, args);
		
	}

}
