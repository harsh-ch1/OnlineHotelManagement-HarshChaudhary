package com.capgemini.retrievereportservice.mapper;

import org.springframework.stereotype.Component;

import com.capgemini.retrievereportservice.entity.StaffPayment;
import com.capgemini.retrievereportservice.model.StaffModel;

@Component
public class StaffMapper {
	
	public StaffPayment mapDtoToEntity(StaffModel staff) {
		StaffPayment staffEntity=new StaffPayment();
		staffEntity.setCode(staff.getCode());
		staffEntity.setFirstname(staff.getFirstname());
		staffEntity.setLastname(staff.getLastname());
		staffEntity.setSalary(staff.getSalary());
		staffEntity.setJoinedon(staff.getJoinedon());
		return staffEntity;
	}
	public StaffModel mapEntityToDto(StaffPayment staff) {
		StaffModel staffModel= new StaffModel();
		staffModel.setCode(staff.getCode());
		staffModel.setFirstname(staff.getFirstname());
		staffModel.setLastname(staff.getLastname());
		staffModel.setSalary(staff.getSalary());
		staffModel.setJoinedon(staff.getJoinedon());
		return staffModel;
	}

}
