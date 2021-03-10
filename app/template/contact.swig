{% extends 'layouts/base.swig' %}
{% block pageTitle %} liên hệ  {% endblock %}
{% block bodyClass %}contact{% endblock %}

{% block content %}
    <section class="section-banner banner-contact">
        <div class="bs-container">
            <div class="bs-row">
                <div class="bs-col">
                    <div class="module module-banner">
                        <div class="module-header">
                            <h2 class="title" data-aos="fade-up" data-aos-delay="100">LIÊN HỆ</h2>
                        </div>

                        <div class="module-content">
                            <div class="folder">
                                <a href="index.html" class="link" data-aos="fade-right" data-aos-delay="500">Trang chủ</a>
                                <a href="#" class="link" data-aos="fade-right" data-aos-delay="500">Liên hệ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-contact">
        <div class="bs-container">
            <div class="bs-row">
                <div class="bs-col">
                    <div class="module module-contact">
                        <div class="bs-row row-md-15">
                            <div class="bs-col md-33-15">
                                <div class="contact-item" data-aos="fade-up" data-aos-delay="1000">
                                    <div class="img">
                                        <img src="../../dist/images/icon-location-contact.png" class="default__icon" alt="">
                                        <img src="../../dist/images/icon2-location-contact.png" class="hover__icon" alt="">
                                    </div>

                                    <div class="content">
                                        <p class="text">Tầng 2, Lô 8 +15 NV, Khu HH1 Ô16 Tây Hồ Tây, 
                                            P.Xuân La, Q.Tây Hồ, TP.Hà Nội.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bs-col md-33-15">
                                <div class="contact-item" data-aos="fade-up" data-aos-delay="1500">
                                    <div class="img">
                                        <img src="../../dist/images/icon-phone-contact.png" class="default__icon" alt="">
                                        <img src="../../dist/images/icon2-phonecontact.png" class="hover__icon" alt="">
                                    </div>

                                    <div class="content">
                                        <p class="text big">024.6666.7069 </p>
                                    </div>
                                </div>
                            </div>

                            <div class="bs-col md-33-15">
                                <div class="contact-item" data-aos="fade-up" data-aos-delay="2000">
                                    <div class="img">
                                        <img src="../../dist/images/icon-mail-contact.png" class="default__icon" alt="">
                                        <img src="../../dist/images/icon2-mail-contact.png" class="hover__icon" alt="">
                                    </div>

                                    <div class="content">
                                        <p class="text medium">vanhongace5.ace@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="section-form">
        <div class="bs-container">
            <div class="bs-row">
                <div class="bs-col">
                    <div class="module module-form">
                        <div class="module-header">
                            <p class="title" data-aos="fade-left" data-aos-delay="1000">LIÊN HỆ</p>
                            <p class="desc" data-aos="fade-left" data-aos-delay="1500">Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn</p>
                        </div>
                        <div class="module-content" >
                                <form action="">
                                    <div class="form-list">
                                        <div class="bs-row row-sm-5">
                                            <div class="bs-col md-50-5">
                                                <div class="form-list__item" data-aos="fade-left" data-aos-delay="1500">
                                                    <input type="text" class="form__input" id="name" placeholder="Họ và tên">
                                                </div>
                                            </div>

                                            <div class="bs-col md-50-5">
                                                <div class="form-list__item" data-aos="fade-left" data-aos-delay="1600">
                                                    <input type="text" class="form__input" id="organization" placeholder="Tổ chức">
                                                </div>
                                            </div>

                                            <div class="bs-col md-50-5">
                                                <div class="form-list__item" data-aos="fade-left" data-aos-delay="1700">
                                                    <input type="text" class="form__input" id="email" placeholder="Email">
                                                </div>
                                            </div>

                                            <div class="bs-col md-50-5">
                                                <div class="form-list__item" data-aos="fade-left" data-aos-delay="1800">
                                                    <input type="text" class="form__input" id="phone__number" placeholder="Số điện thoại">
                                                </div>
                                            </div>

                                            <div class="bs-col md-100-5">
                                                <div class="form-list__item" data-aos="fade-left" data-aos-delay="1900">
                                                    <textarea name="" class="form__textarea" id="content" cols="30" rows="10" placeholder="Nội dung..."></textarea>
                                                </div>
                                            </div>

                                            <div class="bs-col md-100-5">
                                                <div class="form-list__item" data-aos="fade-left" data-aos-delay="2000">
                                                    <button type="submit" class="form__btn" onclick="onclick__btn()">GỬI TIN</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4210.3291935983425!2d105.7692824076487!3d21.033041073719474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1601698405343!5m2!1svi!2s" 
            width="600" 
            height="450" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"></iframe>
        </div>
    </div>
    <script>
    </script>
{% endblock %}