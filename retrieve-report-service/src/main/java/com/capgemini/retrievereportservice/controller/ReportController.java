package com.capgemini.retrievereportservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.capgemini.retrievereportservice.model.StaffModel;
import com.capgemini.retrievereportservice.service.StaffService;



@RestController
@RequestMapping("/RetrieveReport")
public class ReportController {

	@Autowired
	private StaffService staffService;
	
	@Autowired
	private RestTemplate restTemplate;

	@GetMapping(value = "/HelloTest", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> helloTest() {
			return ResponseEntity.ok("Hello World-5");
	}
	
	@PostMapping(value = "/addstaff", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<StaffModel> addStaff(@RequestBody StaffModel staff) {
		return ResponseEntity.ok(staffService.addStaffService(staff));
	}
	
	@GetMapping("/viewstaff")
	public String fetchStudent() {
		return restTemplate.exchange("http://localhost:8083/ManageStaff/viewstaff", HttpMethod.GET,null,String.class).getBody();
	}
	
	
	//@PutMapping(value = "/saveall", produces = MediaType.APPLICATION_JSON_VALUE)
	//public ResponseEntity <String> saveAll() {
		
	//	List staffData = this.restTemplate.getForObject("http://localhost:8083/ManageStaff/viewstaff", List.class);
		
	//	return ResponseEntity.ok(staffService.addStaffService(staffData));
		
	//}
	
	//@GetMapping(value = "/viewstaff", produces = MediaType.APPLICATION_JSON_VALUE)
	//public ResponseEntity <List<StaffPayment>> viewAll() {
		// ResponseEntity<List<StaffPayment>> staffList = ResponseEntity.ok(staffService.getStaffService());
		 //http://localhost:8083/ManageStaff/viewstaff
		// ResponseEntity<List<StaffPayment>> staffDetails = (ResponseEntity<List<StaffPayment>>) this.restTemplate.getForObject("http://localhost:8083/ManageStaff/viewstaff",List.class);
		 
		// return staffDetails;
	//}
}
