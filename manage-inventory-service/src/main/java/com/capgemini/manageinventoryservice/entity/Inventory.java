package com.capgemini.manageinventoryservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inventoryDB")
public class Inventory {
	
	@Id
	@Column
	private String item_Name;
	@Column
	private int item_Quantity;
	
	
	public String getItem_Name() {
		return item_Name;
	}
	public void setItem_Name(String item_Name) {
		this.item_Name = item_Name;
	}
	public int getItem_Quantity() {
		return item_Quantity;
	}
	public void setItem_Quantity(int item_Quantity) {
		this.item_Quantity = item_Quantity;
	}


	
}
