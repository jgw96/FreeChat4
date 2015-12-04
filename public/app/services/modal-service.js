var ModalService = (function () {
    function ModalService() {
        this.element = document.querySelector("#addNewSection");
    }
    ModalService.prototype.open = function () {
        if (this.element.classList.contains("slideOutDown")) {
            this.element.classList.remove("slideOutDown");
        }
        this.element.style.display = "block";
        this.element.style.bottom = "0px";
        this.element.style.height = "100%";
        this.element.classList.add("slideInUp");
    };
    ModalService.prototype.close = function () {
        var _this = this;
        this.element.classList.remove("slideInUp");
        this.element.classList.add("slideOutDown");
        setTimeout(function () {
            _this.element.style.display = "none";
        }, 800);
    };
    return ModalService;
})();
exports.ModalService = ModalService;
//# sourceMappingURL=modal-service.js.map