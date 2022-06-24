export default class Image {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://image.izettle.com';
  }
  list(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/images`, {}, done);
  }
  uploadFile(data, done) {
    return this.client.get(this.baseUrl, `/v2/images/organizations/${this.client.organizationUuid}/products/upload`, data, done);
  }
  uploadUrl(data, done) {
    return this.client.get(this.baseUrl, `/v2/images/organizations/${this.client.organizationUuid}/products`, data, done);
  }
  uploadUrlBulk(data, done) {
    return this.client.get(this.baseUrl, `/v2/images/organizations/${this.client.organizationUuid}/products/bulk`, data, done);
  }
}
