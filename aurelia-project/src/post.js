export class Post {

    // activate lifecycle hook
    activate(params) {
        this.slug = params.slug;
    }
}