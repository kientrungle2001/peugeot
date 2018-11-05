import i18n from 'i18next';
import {peugeot_api_url} from 'peugeot_constants';
// import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

console.log(peugeot_api_url);

i18n
    //.use(LanguageDetector)
    .use(Backend)
    .init({
        loadPath: peugeot_api_url + '/locale_{{lng}}',
        addPath: peugeot_api_url + '/locale_add_{{lng}}/{{ns}}',
        allowMultiLoading: false,
        crossDomain: true,
        withCredentials: true,
        fallbackLng: window.localStorage.getItem('i18nextLng') || 'vn',
    })
    /*
    .init({
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: 'locales/add/{{lng}}/{{ns}}',
        allowMultiLoading: false,
        crossDomain: true,
        withCredentials: true,
        // we init with resources
        resources: {
            en: {
                translations: {
                    "more_pricing": "Bulk quotation!",
                    "order_method": "Order form!",
                    'phutung_theoxe': 'Accessaries By Car',
                    'phutung': 'Accessaries',
                    'home': 'Home',
                    'product': 'Product',
                    'contact': 'Contact',
                    'office': 'Office',
                    'phone': 'Phone',
                    'full_name': 'Full Name',
                    'subject': 'Subject',
                    'message': 'Message',
                    'send': 'Send',
                    'phutung_peugeot': 'Peugeot Accessaries',
                    'ma_phutung': 'Accessary Code',
                    'ten_phutung': 'Accessary Name',
                    'search': 'Search',
                    'term_and_conditions': 'Term And Conditions',
                    'peugeot_news': 'Peugeot News',
                    'newsletter_subscription': 'Newsletter Subscription',
                    'subscribe': 'Subscribe',
                    'introduction': 'Introduction',
                    'recruitement': 'Recruitement',
                    'newsletter_message': 'If you leave an email when a new product is updated, you will receive a notification immediately',
                    'vhp_address': '17/331 Tran Khat Chan, Thanh Nhan Ward, Hai Ba Trung District, Ha Noi City',
                    'vhp_phone': 'Phone : 0800-123456 (24/7 Support Line)',
                    'enter_your_email': 'Enter Your Email',
                    'choose_language': 'Choose Language',
                    'all':'All',
                    'tim_phutung_theoxe': 'Search Accessaries By Car',
                    'price': 'Price',
                    'your_product': 'Your Product',
                    'total': 'Total',
                    'total_amount': 'Total Amount',
                    'product_code': 'Product Code',
                    'product_name': 'Product Name',
                    'product_branding': 'Branding',
                    'product_origin': 'Origin',
                    'thumbnail': 'Image',
                    'car_used': 'Car Used',
                    'year_built': 'Year Built',
                    'origin': 'Origin',
                    'place_order': 'Place Order',
                    'same_category_products': 'Same Category Products',
                    'viewed_products': 'Viewed Products',
                    'free_shipping': 'Free Shipping for orders',
                    'not_include_vat': 'Price does not include VAT',
                    'origin_gurantee': 'Commit to 100% genuine product',
                    'sale_phone': 'Sale Phone',
                    'cart_detail': 'Cart Detail',
                    'image': 'Image',
                    'product_name_code': 'Product Name And Code',
                    'quantity': 'Quantity',
                    'delete': 'Delete',
                    'cart': 'Shopping Cart',
                    'add_more_product': 'Add More Product',
                    'order_information': 'Order Information',
                    'full_name_required': 'Full Name (Required)',
                    'address_required': 'Address (Required)',
                    'phone_required': 'Phone (Required)',
                    'back_to_cart': 'Back to Cart',
                    'checkout_send': 'Send',
                    'captcha_required': 'You must enter captcha',
                    'empty_cart_notify': 'There is no item in the cart',
                    'thanks_for_place_order': 'Thanks for your order. We will call you soon!',
                    'showroom_address': ' 27D Ly Thai To, Hoan Kiem, Hanoi',
                    'office_address': 'No.30, Lane 65 Pham Ngoc Thach, Kim Lien, Dong Da, Hanoi',
                    'hotline_number': '0985.118.368',
                    'tel_number': '0243.373.8899'
                }
            },
            vn: {
                translations: {
                    "more_pricing": "Báo giá số lượng lớn!",
                    "order_method": "Hình thức đặt hàng!",
                    'phutung_theoxe': 'Phụ tùng theo xe',
                    'phutung': 'Phụ tùng',
                    'home': 'Trang chủ',
                    'product': 'Sản phẩm',
                    'contact': 'Liên hệ',
                    'office': 'Văn phòng',
                    'phone': 'Điện thoại',
                    'full_name': 'Họ và tên',
                    'subject': 'Chủ đề',
                    'message': 'Lời nhắn',
                    'send': 'Gửi',
                    'phutung_peugeot': 'Phụ tùng Peugeot',
                    'ma_phutung': 'Mã phụ tùng',
                    'ten_phutung': 'Tên phụ tùng',
                    'search': 'Tìm kiếm',
                    'term_and_conditions': 'Quy định - Chính sách',
                    'peugeot_news': 'Tin tức Peugeot',
                    'newsletter_subscription': 'Đăng ký thư báo',
                    'subscribe': 'Đăng ký',
                    'introduction': 'Giới thiệu',
                    'recruitement': 'Tuyển dụng',
                    'newsletter_message': 'Nếu bạn để lại email khi website cập nhật sản phẩm mới bạn sẽ nhận được thông báo ngay lập tức',
                    'vhp_address': 'Số 17/331 Trần Khát Chân, P.Thanh Nhàn, Q.Hai Bà Trưng, TP.Hà Nội',
                    'vhp_phone': 'Điện thoại: 0800-123456 (Đường dây hỗ trợ 24/7)',
                    'enter_your_email': 'Nhập email',
                    'choose_language': 'Chọn ngôn ngữ',
                    'all': 'Tất cả',
                    'tim_phutung_theoxe': 'Tìm phụ tùng theo xe',
                    'price': 'Giá',
                    'your_product': 'Sản phẩm của bạn',
                    'total': 'Tổng tiền',
                    'total_amount': 'Tổng cộng',
                    'product_code': 'Mã sản phẩm',
                    'product_name': 'Tên sản phẩm',
                    'product_branding': 'Thương hiệu',
                    'product_origin': 'Xuất xứ',
                    'thumbnail': 'Ảnh minh họa',
                    'car_used': 'Xe sử dụng',
                    'year_built': 'Năm sản xuất',
                    'origin': 'Xuất xứ',
                    'place_order': 'Đặt mua',
                    'same_category_products': 'Sản phẩm cùng thể loại',
                    'viewed_products': 'Sản phẩm đã xem',
                    'free_shipping': 'Vận chuyển miễn phí cho các đơn hàng',
                    'not_include_vat': 'Giá trên chưa bao gồm VAT',
                    'origin_gurantee': 'Cam kết sản phẩm 100% chính hãng',
                    'sale_phone': 'Điện thoại bán hàng',
                    'cart_detail': 'Chi tiết giỏ hàng',
                    'image': 'Hình ảnh',
                    'product_name_code': 'Tên và mã sản phẩm',
                    'quantity': 'Số lượng',
                    'delete': 'Xóa',
                    'cart': 'Giỏ hàng',
                    'add_more_product': 'Thêm sản phẩm',
                    'order_information': 'Thông tin đặt hàng',
                    'full_name_required': 'Họ và tên (Bắt buộc)',
                    'address_required': 'Địa chỉ (Bắt buộc)',
                    'phone_required': 'Số điện thoại (Bắt buộc)',
                    'back_to_cart': 'Trở lại Giỏ hàng',
                    'checkout_send': 'Gửi thông tin',
                    'captcha_required': 'Bạn cần phải nhập captcha',
                    'empty_cart_notify': 'Không có sản phẩm nào trong giỏ hàng',
                    'thanks_for_place_order': 'Cám ơn bạn đã đặt hàng. Chúng tôi sẽ sớm gọi lại cho bạn!',
                    'showroom_address': ' 27D Lý Thái Tổ, Hoàn Kiếm, Hà Nội',
                    'office_address': 'Số 30 Ngõ 65 Phạm Ngọc Thạch, Kim Liên, Đống Đa, Hà Nội',
                    'hotline_number': '0985.118.368',
                    'tel_number': '0243.373.8899'
                }
            }
        },
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    })*/
    
    ;

export default i18n;