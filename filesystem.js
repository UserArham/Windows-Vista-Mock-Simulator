// Simple Filesystem
class FileSystem {
    constructor() {
        this.data = JSON.parse(localStorage.getItem("vista_fs") || "{}");
        this.save();
    }

    save() {
        localStorage.setItem("vista_fs", JSON.stringify(this.data));
    }

    create(path, content = "") {
        this.data[path] = content;
        this.save();
    }

    read(path) {
        return this.data[path] || "";
    }

    write(path, content) {
        this.data[path] = content;
        this.save();
    }

    delete(path) {
        delete this.data[path];
        this.save();
    }

    list() {
        return Object.keys(this.data);
    }
}

window.fs = new FileSystem();
