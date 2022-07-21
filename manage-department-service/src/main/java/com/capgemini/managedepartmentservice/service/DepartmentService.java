package com.capgemini.managedepartmentservice.service;

import org.springframework.stereotype.Service;

import com.capgemini.managedepartmentservice.model.DepartmentModel;

@Service
public interface DepartmentService {
	public DepartmentModel addDepartmentService(DepartmentModel department);
	public DepartmentModel updateDepartmentService(DepartmentModel department);
	public String deleteDepartmentService(int id);

}
