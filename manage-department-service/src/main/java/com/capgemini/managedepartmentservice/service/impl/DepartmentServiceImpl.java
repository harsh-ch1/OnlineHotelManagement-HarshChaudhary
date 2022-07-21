package com.capgemini.managedepartmentservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capgemini.managedepartmentservice.entity.Department;
import com.capgemini.managedepartmentservice.mapper.DepartmentMapper;
import com.capgemini.managedepartmentservice.model.DepartmentModel;
import com.capgemini.managedepartmentservice.repository.DepartmentRepository;
import com.capgemini.managedepartmentservice.service.DepartmentService;

@Component
public class DepartmentServiceImpl implements DepartmentService{
	
	@Autowired
	private DepartmentMapper departmentMapper;
	@Autowired
	private DepartmentRepository departmentRepository;
	
	public DepartmentModel addDepartmentService(DepartmentModel department) {
		Department departmentEntity= departmentRepository.save(departmentMapper.mapDtoToEntity(department));
		return departmentMapper.mapEntityToDto(departmentEntity);
	}
	
	public DepartmentModel updateDepartmentService(DepartmentModel department) {
		Department departmentEntity =departmentRepository.findById(department.getId());
		departmentEntity.setName(department.getName());
		departmentEntity.setHodName(department.getHodName());
		departmentEntity.setHodPhoneNo(department.getHodPhoneNo());
		departmentEntity.setSizeOfDepartment(department.getSizeOfDepartment());
		departmentEntity=departmentRepository.save(departmentEntity);
		return departmentMapper.mapEntityToDto(departmentEntity);
	}
	
	public String deleteDepartmentService(int id) {
		try {
			departmentRepository.deleteById(id);
			return "Successfully deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "can't delete";
	}

}
