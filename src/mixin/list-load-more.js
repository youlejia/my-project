export default {
	data() {
		return {
			pages: {
				perPage: 8,
				currPage: 1,
				pageCount: 0
			},
			items: [],
			loading: false,
			isEmpty: false,
			finished: false,
		}
	},

	methods: {
		async resetInit(params) {
			this.resetData();
			const page = await this.initData();
			this.$nextTick(() => {
				this.setPages(page);
			})
		},
		async loadMore() {
			var vm = this;
			if (vm.pages.pageCount < vm.pages.currPage) {
				vm.$toast({
					message: "没有更多了~",
					position: "top"
				});
			} else {
				const page = await vm.initData(true);
				vm.nextPage(page.last_page);
			}
			vm.loading = false;
		},
		nextPage(pageCount = 1) {
			this.pages.currPage += 1;
			this.pages.pageCount = pageCount;
		},
		setPages(page = {}) {
			this.isEmpty = (page.total === 0);
			if (page.total <= this.pages.perPage) {
				// 不满一页
				this.finished = true;
			} else {
				// 下一页
				this.nextPage(page.last_page);
			}
		},
		resetData() {
			this.items = [];
			this.pages = {
				perPage: 8,
				currPage: 1,
				pageCount: 0
			}
			this.loading = false;
			this.isEmpty = false;
			this.finished = false;
		}
	}
}