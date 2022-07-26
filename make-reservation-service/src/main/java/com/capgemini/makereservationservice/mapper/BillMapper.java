package com.capgemini.makereservationservice.mapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.capgemini.makereservationservice.entity.Bill;
import com.capgemini.makereservationservice.entity.Reservation;
import com.capgemini.makereservationservice.model.BillModel;
import com.capgemini.makereservationservice.model.ReservationModel;

@Component
public class BillMapper {
	public Bill mapDtoToEntity(BillModel model) {
		Bill bill = new Bill();
		bill.setDays(model.getDays());
		bill.setRate(model.getRate());
		bill.setTotalBill(model.getTotalBill());
		bill.setBillId(model.getBillId());
		bill.setGuestEmail(model.getGuestEmail());
		bill.setGuestName(model.getGuestName());
		bill.setRoomNo(model.getRoomNo());
		bill.setRoomType(model.getRoomType());
		return bill;
	}
	
	public BillModel mapEntityToDto(Bill bill) {
		BillModel model=new BillModel();
		BeanUtils.copyProperties(bill, model);
		return model;
	}

}
