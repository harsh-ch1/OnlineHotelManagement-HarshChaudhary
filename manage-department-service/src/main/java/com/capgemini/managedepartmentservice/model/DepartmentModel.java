package com.capgemini.managedepartmentservice.model;


import javax.validation.constraints.Digits;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class DepartmentModel {
	
    @NotNull
	private int id;
	
	@NotBlank (message = "name is mandatory")
	@Size(min =3 , max = 14, message = "criteria does not match")
	private String Name;
	
	@NotBlank(message = "hod name is mandatory")
	@Size(min =3 , max = 14)
	private String hodName;
	
	@NotBlank(message = "phone no can not be null")
	@Pattern(regexp = "^(\\s*|\\d{10})$" , message = "criteria doesn't match")
	private String hodPhoneNo;
	
    @NotNull
    @Min(value = 2)
    @Max(value = 40)
	private int sizeOfDepartment;




	public String getName() {
		return Name;
	}



	public void setName(String name) {
		Name = name;
	}



	public String getHodName() {
		return hodName;
	}



	public void setHodName(String hodName) {
		this.hodName = hodName;
	}



	public String getHodPhoneNo() {
		return hodPhoneNo;
	}



	public void setHodPhoneNo(String hodPhoneNo) {
		this.hodPhoneNo = hodPhoneNo;
	}



	public int getSizeOfDepartment() {
		return sizeOfDepartment;
	}



	public void setSizeOfDepartment(int sizeOfDepartment) {
		this.sizeOfDepartment = sizeOfDepartment;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}
	
	
	
	

}
