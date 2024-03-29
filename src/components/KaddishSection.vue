<template>
    <section id="request" class="relative px-12 py-16" v-bind:class="{ sending: is_sending }">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl text-center">Request Kaddish Services</h2>
            <h3 class="my-4 text-2xl text-center">Have Kaddish recited in memory of your loved one!</h3>
            <p class="mb-4 text-xl">
                Kaddish transforms your sense of loss and helplessness into ongoing connection and meaning. At the same
                time, it adds purpose and substance to the memory of the deceased. Jewish belief also maintains that the
                deceased is comforted with the knowledge that others are carrying on the eternal flame of Jewish
                tradition. When Kaddish is said for your loved one, you are connecting – to G-d, to yourself, and to the
                deceased.
            </p>
            <hr />
        </div>
        <div class="max-w-4xl mx-auto" v-bind:class="{ sent: form_submitted }" v-if="!form_submitted">
            <form id="kaddishForm" @submit.prevent="submitForm">
                <div class="mt-4">
                    <label class="block mt-4" for="nameOfDeceased">Name of Deceased (Hebrew name if known)</label>
                    <input
                        type="text"
                        name="name_of_deceased"
                        v-model="form.name_of_deceased"
                        placeholder="Please enter the full name of the deceased"
                    />
                    <FormError v-if="name_of_deceased_empty_error" message="This field is required." />
                </div>
                <div class="formSection">
                    <label class="block mt-4" for="gender">Gender</label>
                    <select id="gender" name="gender" v-model="form.gender">
                        <option value selected>Please choose</option>
                        <option value="Ben">Ben (male)</option>
                        <option value="Bat">Bat (female)</option>
                    </select>
                    <FormError v-if="gender_empty_error" message="Please select an option." />
                </div>
                <div class="formSection">
                    <label class="block mt-4" for="nameOfFatherDeceased"
                        >Name of Deceased's Father (Hebrew name if known)</label
                    >
                    <input
                        type="text"
                        name="name_of_deceased_father"
                        v-model="form.name_of_deceased_father"
                        placeholder="Please enter the full name of the father of the deceased"
                    />
                    <FormError v-if="name_of_deceased_father_empty_error" message="This field is required." />
                </div>
                <div class="flex formSection">
                    <div class="w-1/2">
                        <label class="block mt-4" for="yearOfPassing">Year of Passing</label>
                        <input
                            type="text"
                            name="yearOfPassing"
                            v-model="form.yearOfPassing"
                            placeholder="Please enter the year."
                            value
                        />
                         <FormError
                                v-if="
                                    yearOfPassing_empty_error
                                "
                                message="Please input a year"
                            />
                    </div>
                    <div class="w-1/2">
                        <label class="block mt-4" for="timeOfPassing">Time of Passing (if possible)</label>
                        <input
                            type="time"
                            name="timeOfPassing"
                            v-model="form.timeOfPassing"
                            value
                        />
                    </div>
                </div>
                <div class="formSection hebrewDate">
                    <label class="block mt-4" for="hebDate">Hebrew Date of Passing (if possible)</label>
                    <div class="flex">
                        <select id="hebDayOfMonth" name="hebDayOfMonth" v-model="form.hebDayOfMonth">
                            <option value selected>Please select a day</option>
                            <option v-for="index in getNumbers(1, 32)" :key="index" :value="index">{{ index }}</option>
                        </select>
                        <select id="hebMonth" name="hebMonth" v-model="form.hebMonth">
                            <option value selected>Please select a month</option>
                            <option v-for="month in hebrew_months" :value="month">{{ month }}</option>
                        </select>
                    </div>
                </div>
                <div class="formSection dateOfPassing">
                    <label class="block mt-4" for="dateOfPassing">English Date of Passing (and time if possible)</label>
                    <div class="flex">
                        <select id="dateOfPassingDay" v-model="form.dateOfPassingDay" name="dateOfPassingDay">
                            <option value selected>Please select a day</option>
                            <option v-for="index in getNumbers(1, 32)" :key="index" :value="index">{{ index }}</option>
                        </select>
                        <select id="dateOfPassingMonth" v-model="form.dateOfPassingMonth" name="dateOfPassingMonth">
                            <option value selected>Please select a month</option>
                            <option v-for="month in months" :value="month">{{ month }}</option>
                        </select>
                    </div>
                    <FormError
                        v-if="
                            dateOfPassingMonth_empty_error ||
                                dateOfPassingDay_empty_error
                        "
                        message="Please input a date"
                    />
                    <FormError v-if="dateOfPassingYear_string_error" message="Please input the year as a number" />
                </div>
                <div class="formSection">
                    <label class="block mt-4" for="firstName">Date of Funeral</label>
                    <div class="flex">
                        <select id="dateOfFuneralDay" v-model="form.dateOfFuneralDay" name="dateOfFuneralDay">
                            <option value selected>Please select a day</option>
                            <option v-for="index in getNumbers(1, 32)" :key="index" :value="index">{{ index }}</option>
                        </select>
                        <select id="dateOfFuneralMonth" v-model="form.dateOfFuneralMonth" name="dateOfFuneralMonth">
                            <option value selected>Please select a month</option>
                            <option v-for="month in months" :value="month">{{ month }}</option>
                        </select>
                        <input
                            type="text"
                            name="dateOfFuneralYear"
                            v-model="form.dateOfFuneralYear"
                            placeholder="Please enter the year."
                            value
                        />
                    </div>
                </div>
                <div class="formSection">
                    <label class="block mt-4" for="firstName">Your First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        v-model="form.first_name"
                        placeholder="Please enter your first name"
                        value
                    />
                    <FormError v-if="first_name_empty_error" message="This field is required." />
                </div>
                <div class="formSection">
                    <label class="block mt-4" for="lastName">Your Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        v-model="form.last_name"
                        placeholder="Please your last name"
                        value
                    />
                    <FormError v-if="last_name_empty_error" message="This field is required." />
                </div>
                <div class="formSection">
                    <label class="block mt-4" for="email">Your Email Address</label>
                    <input
                        type="email"
                        name="email"
                        v-model="form.email"
                        placeholder="Please enter your email address"
                        value
                    />
                    <FormError
                        v-if="email_empty_error"
                        message="This field is required and should be a valid email address."
                    />
                    <p class="centered">Tal Chaim will never share your email address or send unnecessary emails.</p>
                </div>
                <input class="mt-4 btnGrey formSubmit" id="kaddishFormSubmit" type="submit" value="Submit" />
            </form>
        </div>
        <div class="sending_section" v-if="is_sending">
            <h3 class="sending_section__message">Sending...</h3>
        </div>
        <div class="text-center" v-if="form_submitted">
            <h1>Your Form Has Been Submitted</h1>
            <p>We have received your request.</p>
            <p>If you have any questions or concerns please feel free to contact us.</p>
            <a href="mailto:talchaimkaddish@gmail.com">talchaimkaddish@gmail.com</a>
            <p>
                If you need to submit again please
                <button @click="form_submitted = false">click here</button>
            </p>
        </div>
        <div class="text-center text-red-600" v-if="submit_error">
            <h2>Something went wrong. Please try again soon.</h2>
        </div>
    </section>
</template>

<script>
import FormError from "~/components/FormError.vue";

export default {
    name: "KaddishSection",
    components: {
        FormError,
    },
    data() {
        return {
            is_sending: false,
            form_submitted: false,
            submit_error: false,
            name_of_deceased_empty_error: false,
            gender_empty_error: false,
            name_of_deceased_father_empty_error: false,
            hebDayOfMonth_empty_error: false,
            hebMonth_empty_error: false,
            yearOfPassing_empty_error: false,
            dateOfPassingDay_empty_error: false,
            dateOfPassingMonth_empty_error: false,
            dateOfPassingYear_empty_error: false,
            dateOfPassingYear_string_error: false,
            first_name_empty_error: false,
            last_name_empty_error: false,
            email_empty_error: false,
            form_valid: false,
            hebrew_months: [
                "Nisan",
                "Iyar",
                "Sivan",
                "Tammuz",
                "Av",
                "Elul",
                "Tishrei",
                "Cheshvan",
                "Kislev",
                "Tevet",
                "Shevat",
                "Adar",
            ],
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            form: {
                name_of_deceased: "",
                gender: "",
                name_of_deceased_father: "",
                hebDayOfMonth: "",
                hebMonth: "",
                dateOfPassingDay: "",
                dateOfPassingMonth: "",
                dateOfPassingYear: "",
                timeOfPassing: "",
                yearOfPassing: "",
                dateOfFuneralDay: "",
                dateOfFuneralMonth: "",
                dateOfFuneralYear: "",
                first_name: "",
                last_name: "",
                email: "",
            },
        };
    },
    methods: {
        getNumbers: function(start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        },
        validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        validateForm() {
            this.submit_error = false;
            this.name_of_deceased_empty_error = false;
            this.gender_empty_error = false;
            this.name_of_deceased_father_empty_error = false;
            this.hebDayOfMonth_empty_error = false;
            this.hebMonth_empty_error = false;
            this.yearOfPassing_empty_error = false;
            this.dateOfPassingDay_empty_error = false;
            this.dateOfPassingMonth_empty_error = false;
            this.dateOfPassingYear_string_error = false;
            this.first_name_empty_error = false;
            this.last_name_empty_error = false;
            this.email_empty_error = false;

            for (let field in this.form) {
                if (this.form[field] == "") {
                    let cur_field = `${field}_empty_error`;
                    this[cur_field] = true;
                    this.form_valid = false;
                } else if (field == "email" && !this.validateEmail(this.form.email)) {
                    this.email_empty_error = true;
                    this.form_valid = false;
                } else {
                    this.form_valid = true;
                }
            }
        },
        submitForm: function() {
            let vm = this;

            this.validateForm();

            let hebrewPassingDate = `${this.form.hebMonth}/${this.form.hebDayOfMonth}/${this.form.yearOfPassing}`;
            let englishPassingDate = `${this.form.dateOfPassingMonth}/${this.form.dateOfPassingDay}/${
                this.form.yearOfPassing
            }`;
            let fullName = `${this.form.first_name} ${this.form.last_name}`;
            let funeralDate = `${this.form.dateOfFuneralMonth}/${this.form.dateOfFuneralDay}/${this.form.dateOfFuneralYear}`;


            const data = {
                hebrewPassingDate: hebrewPassingDate,
                englishPassingDate: englishPassingDate,
                timeOfPassing: this.form.timeOfPassing,
                name: fullName,
                email: this.form.email,
                name_of_deceased: this.form.name_of_deceased,
                gender: this.form.gender,
                name_of_deceased_father: this.form.name_of_deceased_father,
                funeralDate: funeralDate
            };

            if (this.form_valid) {
                this.is_sending = true;
                fetch("https://v1vznezqi4.execute-api.us-east-1.amazonaws.com/default/talchaim_email_function", {
                    method: "post",
                    body: JSON.stringify(data),
                })
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) {
                        if (data.status == "success") {
                            vm.is_sending = false;
                            vm.form_submitted = true;
                            for (let field in vm.form) {
                                vm.form[field] = "";
                            }
                        } else if (
                            (data.status && data.status == "error") ||
                            (data.message && data.message == "Internal Server Error")
                        ) {
                            vm.is_sending = false;
                            vm.form_submitted = false;
                            vm.submit_error = true;
                        }
                    });
            }
        },
    },
};
</script>

<style scoped>
input,
select,
textarea {
    border: 1px solid;
    padding: 0.65em 1em;
    box-sizing: border-box;
    width: 100%;
}
.sending_section {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}
.sending_section .sending_section__message {
    animation: pulse 2s infinite;
}
@keyframes pulse {
    0% {
        transform: scale(0.95);
    }

    70% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(0.95);
    }
}
</style>
