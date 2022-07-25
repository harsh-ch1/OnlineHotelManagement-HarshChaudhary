package com.capgemini.retrievereportservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capgemini.retrievereportservice.entity.StaffPayment;
import com.capgemini.retrievereportservice.model.StaffModel;


@Service
public interface StaffService {
	public StaffModel addStaffService(StaffModel staff);
	public String addStaffService(List<StaffModel> staffList);
	public List<StaffModel> getStaffService();

}
