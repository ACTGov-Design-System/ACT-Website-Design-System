export const create3P = ({
	backgroundColor,
	label,
	type,
	onClick,
	primary = false,
	size = "medium",
}) => {
	return `
<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">

				<div class="act-col act-col-sm-2">
					<div class="act-box">
						sm-2
					</div>
				</div>
				<div class="act-col act-col-sm-2">
					<div class="act-box">
						sm-2
					</div>
				</div>
				<div class="act-col act-col-sm-2">
					<div class="act-box">
						sm-2
					</div>
				</div>
				<div class="act-col act-col-sm-2">
					<div class="act-box">
						sm-2
					</div>
				</div>
				<div class="act-col act-col-sm-2">
					<div class="act-box">
						sm-2
					</div>
				</div>
				<div class="act-col act-col-sm-2">
					<div class="act-box">
						sm-2
					</div>
				</div>

				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>

				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>

				<div class="act-col act-col-sm-6">
					<div class="act-box">
						sm-6
					</div>
				</div>
				<div class="act-col act-col-sm-6">
					<div class="act-box">
						sm-6
					</div>
				</div>

				<div class="act-col act-col-sm-8">
					<div class="act-box">
						sm-8
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>

				<div class="act-col act-col-sm-9">
					<div class="act-box">
						sm-9
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>

				<div class="act-col act-col-sm-12">
					<div class="act-box">
						sm-12
					</div>
				</div>

      </div>
    </div>
  </div>
</div>
<div class="act-flex act-flex-light-grey">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">

				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>

				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>

				<div class="act-col act-col-sm-6">
					<div class="act-box">
						sm-6
					</div>
				</div>
				<div class="act-col act-col-sm-6">
					<div class="act-box">
						sm-6
					</div>
				</div>

				<div class="act-col act-col-sm-8">
					<div class="act-box">
						sm-8
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>

				<div class="act-col act-col-sm-9">
					<div class="act-box">
						sm-9
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>

				<div class="act-col act-col-sm-12">
					<div class="act-box">
						sm-12
					</div>
				</div>

      </div>
    </div>
  </div>
</div>
<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">

				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>

				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>

				<div class="act-col act-col-sm-6">
					<div class="act-box">
						sm-6
					</div>
				</div>
				<div class="act-col act-col-sm-6">
					<div class="act-box">
						sm-6
					</div>
				</div>

				<div class="act-col act-col-sm-8">
					<div class="act-box">
						sm-8
					</div>
				</div>
				<div class="act-col act-col-sm-4">
					<div class="act-box">
						sm-4
					</div>
				</div>

				<div class="act-col act-col-sm-9">
					<div class="act-box">
						sm-9
					</div>
				</div>
				<div class="act-col act-col-sm-3">
					<div class="act-box">
						sm-3
					</div>
				</div>

				<div class="act-col act-col-sm-12">
					<div class="act-box">
						sm-12
					</div>
				</div>

      </div>
    </div>
  </div>
</div>
	`;
};
