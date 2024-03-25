import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base/base-page"

export class OrderPage extends BasePage {
  container: Locator
  orderEmail: Locator
  orderDate: Locator
  orderId: Locator
  orderStatus: Locator
  orderPaymentStatus: Locator
  shippingAddressSummary: Locator
  shippingContactSummary: Locator
  shippingMethodSummary: Locator
  paymentMethod: Locator
  paymentAmount: Locator
  productsTable: Locator
  productRow: Locator
  productTitle: Locator
  productVariant: Locator
  productQuantity: Locator
  productOriginalPrice: Locator
  productPrice: Locator
  productUnitOriginalPrice: Locator
  productUnitPrice: Locator

  constructor(page: Page) {
    super(page)
    this.container = page.getByTestId("order-complete-container")
    this.orderEmail = this.container.getByTestId("order-email")
    this.orderDate = this.container.getByTestId("order-date")
    this.orderId = this.container.getByTestId("order-id")
    this.orderStatus = this.container.getByTestId("order-status")
    this.orderPaymentStatus = this.container.getByTestId("order-payment-status")
    this.shippingAddressSummary = this.container.getByTestId(
      "shipping-address-summary"
    )
    this.shippingContactSummary = this.container.getByTestId(
      "shipping-contact-summary"
    )
    this.shippingMethodSummary = this.container.getByTestId(
      "shipping-method-summary"
    )
    this.paymentMethod = this.container.getByTestId("payment-method")
    this.paymentAmount = this.container.getByTestId("payment-amount")

    this.productsTable = this.container.getByTestId("products-table")
    this.productRow = this.container.getByTestId("product-row")
    this.productTitle = this.container.getByTestId("product-title")
    this.productVariant = this.container.getByTestId("product-variant")
    this.productQuantity = this.container.getByTestId("product-quantity")
    this.productOriginalPrice = this.container.getByTestId(
      "product-original-price"
    )
    this.productPrice = this.container.getByTestId("product-price")
    this.productUnitOriginalPrice = this.container.getByTestId(
      "product-unit-original-price"
    )
    this.productUnitPrice = this.container.getByTestId("product-unit-price")
  }

  async getProduct(title: string, variant: string) {
    const productRow = this.productRow
      .filter({
        has: this.productTitle.filter({ hasText: title }),
      })
      .filter({
        has: this.productVariant.filter({ hasText: variant }),
      })
    return {
      productRow,
      title: productRow.getByTestId("product-title"),
      variant: productRow.getByTestId("product-variant"),
      deleteButton: productRow.getByTestId("delete-button"),
      quantitySelect: productRow.getByTestId("quantity-select"),
      price: productRow.getByTestId("product-unit-price"),
      total: productRow.getByTestId("product-price"),
    }
  }
}