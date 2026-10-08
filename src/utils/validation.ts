// utils/validation.ts


// Chuỗi rỗng hoặc chỉ chứa khoảng trắng
export const isEmpty = (value: string): boolean => {
  return value.trim().length === 0;
};


// Là số
export const isNumber = (value: any): boolean => {
  return !isNaN(Number(value));
};


// Là số nguyên
export const isInteger = (value: any): boolean => {
  return Number.isInteger(Number(value));
};


// Email hợp lệ
export const isValidEmail = (email: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email.trim());
};


// Mật khẩu đủ mạnh (ít nhất 6 ký tự, có số và chữ)
export const isStrongPassword = (password: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(password);
};


// Số điện thoại 10 chữ số
export const isValidPhone = (phone: string): boolean => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};


// URL hợp lệ
export const isValidURL = (url: string): boolean => {
  const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
  return regex.test(url.trim());
};


// Có chứa ký tự đặc biệt
export const hasSpecialChars = (value: string): boolean => {
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  return regex.test(value);
};


// Kiểm tra độ dài tối thiểu
export const hasMinLength = (value: string, min: number): boolean => {
  return value.trim().length >= min;
};


// Kiểm tra độ dài tối đa
export const hasMaxLength = (value: string, max: number): boolean => {
  return value.trim().length <= max;
};


// Kiểm tra object rỗng
export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};


// Chuỗi chứa một đoạn text nào đó
export const includesText = (value: string, search: string): boolean => {
  return value.includes(search);
};


// Tạo thông báo lỗi theo kiểu chuẩn
export const getRequiredMessage = (fieldName: string): string => {
  return `${fieldName} không được để trống`;
};


export const getInvalidMessage = (fieldName: string): string => {
  return `${fieldName} không hợp lệ`;
};


export const getMinLengthMessage = (fieldName: string, min: number): string => {
  return `${fieldName} phải có ít nhất ${min} ký tự`;
};


export const getMaxLengthMessage = (fieldName: string, max: number): string => {
  return `${fieldName} không được vượt quá ${max} ký tự`;
};


