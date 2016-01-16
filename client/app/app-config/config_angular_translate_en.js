(function () {
  'use strict';

  angular.module('tdpharmaClientApp')
      .config(angularTranslateConfig);

  angularTranslateConfig.$inject = ['$translateProvider'];

  function angularTranslateConfig($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    $translateProvider.translations('en', {
      DATE_FORMAT: 'YYYY-MM-DD h:mm A',
      GREETING: 'Allo, Allo!',
      LEADING_GREETING: 'Kick-start your pharmacy with {{company}}',
      HOME: 'Home',
      INVENTORY: 'Inventory',
      ORDERS: 'Orders',
      CHECKOUT: 'Checkout',
      SIGNUP: 'Sign up',
      REGISTER: 'Register',
      LOGIN: 'Login',
      LOGOUT: 'Log out',      
      EMAIL: 'Email',
      PASSWORD: 'Password',
      LOGIN_FORM_USER_PASSWORD_ERR: 'Please enter your email and password.',
      PASSWORD_CHANGE_TITLE: 'Change password',
      CURRENT_PASSWORD: 'Current Password',
      NEW_PASSWORD: 'New Password',
      SAVE_CHANGES: 'Save Changes',
      PASSWORD_LENGTH_REQUIREMENT: 'Password must be at least 8 characters.',
      TOASTR_CONGRATS: 'Congratulation!',
      TOASTR_SORRY: 'Sorry!',
      TOASTR_CREATED: ' created!',
      PASSWORD_CHANGE_SUCCESS: 'Your password has been changed successfully',
      INCORRECT_PASSWORD: 'Incorrect Password',
      NEXT: 'Next',
      DRAG_IMAGE: 'Drag And Drop your image here',
      // Category related pages
      SELECT_A_CATEGORY: 'Select a category',
      'Baby & Kids': 'Baby & Kids',
      'Beauty & Skincare': 'Beauty & Skincare',
      'Personal Care': 'Personal Care',
      'Diet & Fitness': 'Diet & Fitness',
      'Medicine & Health': 'Medicine & Health',
      'Vitamin & Supplement': 'Vitamin & Supplement',
      'Diapering & Potty': 'Diapering & Potty',
      'Bath & Skincare' : 'Bath & Skincare',
      'Formula & Baby Food': 'Formula & Baby Food',
      'Feeding & Mealtime': 'Feeding & Mealtime',
      'Baby Gear': 'Baby Gear',
      "Children's Medicine & Health": "Children's Medicine & Health",
      'Bath & Body': 'Bath & Body',
      'Eye Cosmetics': 'Eye Cosmetics',
      'Foundation, Blush & Bronzer': 'Foundation, Blush & Bronze',
      'Lipsticks & Lip Balm': 'Lipsticks & Lip Balm',
      'Sun Care': 'Sun Care',
      'Skincare Oils & Supplements': 'Skincare Oils & Supplements',
      'Facial Skincare': 'Facial Skincare',
      'Hair Care': 'Hair Care',
      'Oral Care': 'Oral Care',
      'Eye Care': 'Eye Care',
      'Feminine Care': 'Feminine Care',
      'Antiperspirant & Deodorant': 'Antiperspirant & Deodorant',
      'Bladder Protection & Incontinence': 'Bladder Protection & Incontinence',
      'Cotton Balls & Swabs': 'Cotton Balls & Swabs',
      'Wipes & Hand Sanitizers': 'Wipes & Hand Sanitizers',
      'Family Planning': 'Family Planning',
      'Nutrition': 'Nutrition',
      'Weight Management': 'Weight Management',
      'Sports Supplements': 'Sports Supplements',
      'Supplements': 'Supplements',
      'Digestion': 'Digestion',
      'Pain & Fever': 'Pain & Fever',
      'First Aid': 'First Aid',
      'Cough, Cold & Flu': 'Cough, Cold & Flu',
      'Allergy & Sinus': 'Allergy & Sinus',
      'Hemorrhoid & Piles Treatment': 'Hemorrhoid & Piles Treatment',
      'Diabetes': 'Diabetes',
      'Sleeping': 'Sleeping',
      "Women's Health": "Women's Health",
      'Multivitamins': 'Multivitamins',
      'Calcium & Minerals': 'Calcium & Minerals',
      'Fish Oils & Omegas': 'Fish Oils & Omegas',
      'Enzymes': 'Enzymes',
      'Bee Supplements': 'Bee Supplements',
      'Vitamin': 'Vitamin',
      "Greens & Antioxidants": "Greens & Antioxidants",
      'Mushrooms': 'Mushrooms',
      // Image processing message
      PROCESSING_IMAGE: 'Processing Image...',
      UPLOADING_IMAGE: 'Uploading Image...',
      PROCESSING_IMAGE_TIMEOUT: 'Process Image Timeout',
      SUPPORT_IMAGE_FILE: 'Supported image file formats are: ',
      // Add product page
      ADD_PRODUCT_DETAIL: 'Fill in product information',
      AUTHOR: 'Author',
      NAME: 'Name',
      CONCENTRATION: 'Concentration',
      CONCENTRATION_UNIT: 'Concentration Units',
      MEDICINE_FORM: 'Medicine Form',
      MFG_LOCATION: 'Country',
      MANUFACTURER: 'Manufacturer',
      MANUFACTURE_DATE: 'Manufacture Date',
      EXPIRE_DATE: 'Expire Date',
      PACKAGE: 'Package',
      AMOUNT: 'Amount / Package',
      UNIT: 'Number of Packages',
      TOTAL: 'Total Amount',
      PRICE: 'Price',
      SAVE: 'Save',
      AUTHOR_REQUIRED: 'Author is required',
      NAME_REQUIRED: 'Name is required',
      CONCENTRATION_REQUIRED: 'Concentration is required',
      CONCENTRATION_UNIT_REQUIRED: 'Concentration unit is required',
      MFG_LOCATION_REQUIRED: 'Manufacture location is required',
      MANUFACTURER_REQUIRED: 'Manufacturer is required',
      MFG_DATE_REQUIRED: 'Manufuacture date is requried',
      EXPIRE_DATE_REQUIRED: 'Expiration date is required',
      PACKAGE_REQUIRED: 'Package is required',
      AMOUNT_PER_PKG_REQUIRED: 'amount per package is required',
      AMOUNT_UNIT_REQUIRED: 'Number of packages is required',
      TOTAL_UNITS_REQUIRED: 'Total amount is required',
      PRICE_REQUIRED: 'Price is requried',
      CATEGORY_REQUIRED: 'Category is requried'            
    });
    $translateProvider.preferredLanguage('vn');
  }

})();
