package com.capgemini.retrievereportservice.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capgemini.retrievereportservice.entity.StaffPayment;
import com.capgemini.retrievereportservice.mapper.StaffMapper;
import com.capgemini.retrievereportservice.model.StaffModel;
import com.capgemini.retrievereportservice.repository.StaffRepository;
import com.capgemini.retrievereportservice.service.StaffService;

@Component
public class StaffServiceImpl implements StaffService{
	
	@Autowired
	private StaffMapper staffMapper;
	@Autowired
	private StaffRepository staffRepository;
	
	public StaffModel addStaffService(StaffModel staff) {
		StaffPayment staffEntity= staffRepository.save(staffMapper.mapDtoToEntity(staff));
		return staffMapper.mapEntityToDto(staffEntity);
	}
	
	public String addStaffService(List<StaffModel> staffList) {
		for(StaffModel staff: staffList) {
		StaffPayment staffEntity= staffRepository.save(staffMapper.mapDtoToEntity(staff));
		}
		return "Data Transfered Successfully...";
	}
	
	public List<StaffModel> getStaffService() {
		List<StaffPayment> staffEntity= staffRepository.findAll();
		List<StaffModel> staffModel = new ArrayList<StaffModel>();
		for (StaffPayment staff: staffEntity) {
			staffModel.add(staffMapper.mapEntityToDto(staff));
		}
		return staffModel;
		
	}

}
