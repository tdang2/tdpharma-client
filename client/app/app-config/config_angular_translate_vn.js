(function () {
  'use strict';

  angular.module('tdpharmaClientApp')
      .config(angularTranslateConfig);

  angularTranslateConfig.$inject = ['$translateProvider'];

  function angularTranslateConfig($translateProvider) {
    $translateProvider.translations('vn', {
      GREETING: 'Allo, Allo!',
      LEADING_GREETING: 'Kích hoạt nhà thuốc của bạn với tdPharma',
      HOME: 'Home',
      INVENTORY: 'Tồn Kho',
      ORDERS: 'Hoá Đơn',
      CHECKOUT: 'Bán Thuốc',
      SIGNUP: 'Đăng Ký',
      REGISTER: 'Đăng Ký',
      LOGIN: 'Đăng Nhập',
      LOGOUT: 'Đăng xuất',
      EMAIL: 'Email',
      PASSWORD: 'Mật Mã',
      LOGIN_FORM_USER_PASSWORD_ERR: 'Xin vui lòng cung cấp email và mật mã của bạn.',
      PASSWORD_CHANGE_TITLE: 'Cập Nhập Mật Mã',
      CURRENT_PASSWORD: 'Mật Mã Hiện Tại',
      NEW_PASSWORD: 'Mật Mã Mới',
      PASSWORD_LENGTH_REQUIREMENT: 'Mật mã phải có ít nhất 8 ký tự',
      SAVE_CHANGES: 'Lưu Lại',
      TOASTR_CONGRATS: 'Chúc mừng!',
      TOASTR_SORRY: 'Sorry!',
      TOASTR_CREATED: ' đã được tạo thành công',
      PASSWORD_CHANGE_SUCCESS: 'Mật mã của bạn đã cập nhật thành công',
      INCORRECT_PASSWORD: 'Mật mã hiện tại không đúng',
      NEXT: 'Tiếp tục',
      DRAG_IMAGE: 'Kéo hình vào vùng màu xám để lưu lại',
      // Category related pages
      SELECT_A_CATEGORY: 'Select a category',
      'Baby & Kids': 'Trẻ em & Sơ sinh',
      'Beauty & Skincare': 'Đẹp & Dưỡng da',
      'Personal Care': 'Chăm sóc cá nhân',
      'Diet & Fitness': 'Ăn kiêng & Thể dục',
      'Medicine & Health': 'Thuốc bệnh & Sức khoẻ',
      'Vitamin & Supplement': 'Vitamin & Bỗ dưỡng',
      'Diapering & Potty': 'Vệ sinh của bé',
      'Bath & Skincare' : 'Tắm rửa & Dưỡng da bé',
      'Formula & Baby Food': 'Thức ăn của bé',
      'Feeding & Mealtime': 'Vật dụng ăn cho bé',
      'Baby Gear': 'An toàn của bé',
      "Children's Medicine & Health": "Thuốc bệnh cho bé",
      'Bath & Body': 'Tắm rửa & Cơ thể',
      'Eye Cosmetics': 'Mỹ phẩm mắt',
      'Foundation, Blush & Bronzer': 'Phấn kem nền, má hồng, tạo khối',
      'Lipsticks & Lip Balm': 'Son môi & Dưỡng môi',
      'Sun Care': 'Chăm sóc chống nắng',
      'Skincare Oils & Supplements': 'Dầu kem dưỡng da',
      'Facial Skincare': 'Chăm sóc da mặt',
      'Hair Care': 'Chăm sóc tóc',
      'Oral Care': 'Chăm sóc răng',
      'Eye Care': 'Chăm sóc mắt',
      'Feminine Care': 'Vệ sinh phụ nữ',
      'Antiperspirant & Deodorant': 'Khử mùi và mồ hôi',
      'Bladder Protection & Incontinence': 'Vệ sinh bàng quang',
      'Cotton Balls & Swabs': 'Gạc & Bông gòn',
      'Wipes & Hand Sanitizers': 'Vệ sinh tay',
      'Family Planning': 'Kế hoạch gia đình',
      'Nutrition': 'Dinh dưỡng',
      'Weight Management': 'Quản lý cân nặng',
      'Sports Supplements': 'Bồi dưỡng thể thao',
      'Supplements': 'Bồi dưỡng',
      'Digestion': 'Tiêu hoá',
      'Pain & Fever': 'Đau sốt',
      'First Aid': 'Sơ cứu',
      'Cough, Cold & Flu': 'Cảm lạnh & Ho',
      'Allergy & Sinus': 'Dị ứng & Hô hấp',
      'Hemorrhoid & Piles Treatment': 'Điều trị trĩ cọc',
      'Diabetes': 'Tiểu đường',
      'Sleeping': 'Giấc ngũ',
      "Women's Health": "Sức khoẻ phụ nữ",
      'Multivitamins': 'Vitamin tổng hợp',
      'Calcium & Minerals': 'Calcium & Khoáng sản',
      'Fish Oils & Omegas': 'Dầu cá omega',
      'Enzymes': 'Enzymes',
      'Bee Supplements': 'Bổ dưỡng mật ong',
      'Vitamin': 'Vitamin',
      "Greens & Antioxidants": "Thực phẫm chức năng",
      'Mushrooms': 'Nấm'
    });
  }

})();