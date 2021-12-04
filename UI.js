export class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <a href="#" class="btn btn-danger" name="delete">IMAGEN</a>
                    <strong>PRODUCTO</strong>: ${product.name} -
                    <strong>PRECIO</strong>: ${product.price} - 
                    <strong>AÑO</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">ELIMINAR</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("PRODUCTO ELIMINADO CON EXITO", "info");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    container.insertBefore(div, app);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 1500);
  }
}
