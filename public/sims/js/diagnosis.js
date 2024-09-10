/**
 * Created by KellyCode on 1/16/2016.
 */

/**
 * Diagnosis based on
 * 1. http://www.carls-sims-4-guide.com/careers/gettowork/doctor/
 * 2. http://sims-online.com/sims-4-doctor-career-guide-active/
 * 3. https://www.carls-sims-4-guide.com/careers/gettowork/doctor/
 * 4. my own testing
 *
 * I didn't find the thought bubbles to be very consistant or reliable
 */

/*
 * List of possible ailments listed in the order of how often they tend to occur
 */
let docAilments = {
    bloaty_head: {
        symptoms: ["head_steam", "headache", "spot_rash"],
        name: "Bloaty Head",
        cure: ["N/A"],
    },
    starry_eyes: {
        symptoms: ["dizziness", "swirl_rash", "swatting"],
        name: "Starry Eyes",
        cure: ["N/A"],
    },
    gas_and_giggles: {
        symptoms: ["stomach_ache", "giggling", "stripes_rash"],
        name: "Gas-and-Giggles",
        cure: ["N/A"],
    },
    llama_flu: {
        symptoms: ["spot_rash", "sneeze", "cough", "fever", "giggling"],
        name: "Llama Flu",
        cure: ["N/A"],
    },
    sweaty_shivers: {
        symptoms: ["spot_rash", "itchiness", "fever"],
        name: "Sweaty Shivers",
        cure: ["N/A"],
    },
    itchy_plumbob: {
        symptoms: ["itchiness", "giggling", "stripes_rash", "spot_rash"],
        name: "Itchy Plumbob",
        cure: ["N/A"],
    },
    burnin_belly: {
        symptoms: ["stomach_ache", "fever"],
        name: "Burnin' Belly",
        cure: ["N/A"],
    },
    // pass_gas symptom added (cheek lift and waves hand in front of face)
    triple_threat: {
        symptoms: ["dizziness", "sneeze", "itchiness", "cough", "stripes_rash", "spot_rash", "swirl_rash"],
        name: "Triple Threat",
        cure: ["N/A"],
    },
};

// source: https://www.carls-sims-4-guide.com/expansionpacks/pets/sick-symptoms-cures.php
vetAilments = {
    faking_healthy: {
        diff: "Easy",
        symptoms: ["excessive_earwax", "high_temperature"],
        name: "Faking Healthy",
        cure: ["Fixitol Treat at Exam Table", "Extract Cuteness Surgery"],
    },
    healthy: {
        diff: "Easy",
        symptoms: ["clear_nose", "healthy_skin", "normal_temperature", "standard_smelly_breath", "clear_eyes"],
        name: "Healthy",
        cure: ["Preventative Shot"],
    },
    blazing_tootsies: {
        diff: "Easy",
        symptoms: ["hot_feet", "dry_eyes", "high_temperature"],
        name: "Blazing Tootsies",
        cure: ["Parasite Killer Spray from Exam Table", "Tum Tum Tickletangle Readjustment Surgery"],
    },
    fleas: {
        diff: "Easy",
        symptoms: ["fleas"],
        name: "Fleas!",
        cure: ["Parasite Killer Spray at Exam Table", "Unblock Kibble Chute Blockage"],
    },
    icy_fur: {
        diff: "Easy",
        symptoms: ["icy_fur", "low_temperature", "overly_moist_skin"],
        name: "icy_fur",
        cure: ["Parasite Killer Spray at Exam Table", "Unblock Kibble Chute Blockage"],
    },
    lava_nose: {
        diff: "Easy",
        symptoms: ["glowing_nose", "raspy_breath", "sweet_breath"],
        name: "Lava Nose",
        cure: ["Organic Disinfectant Spray at Exam Table", "Refill Nose Surgery"],
    },
    mild_repugnitis: {
        diff: "Easy",
        symptoms: ["mouth_moths", "uncontrollable_drooling", "stinky_fur"],
        name: "Mild Repugnitis",
        cure: ["Parasite Killer Spray at Exam Table", "Unblock Kibble Chute Blockage"],
    },
    prismatic_poop_plague: {
        diff: "Easy",
        symptoms: ["rainbow_poop", "rapid_heartbeat", "sweet_breath"],
        name: "Prismatic Poop Plague",
        cure: ["MedicineX Pill at Exam Table", "Unblock Kibble Chute Blockage"],
    },
    swamp_mouth: {
        diff: "Easy",
        symptoms: ["barfing", "high_temperature", "uncontrollable_drooling"],
        name: "Swamp Mouth",
        cure: ["Essence of Placebo at Treatment Table", "Tum Tum Tickletangle Readjustment Surgery"],
    },
    winterfest_fever: {
        diff: "Easy",
        symptoms: ["glowing_nose", "icy_fur", "low_temperature"],
        name: "Winterfest Fever",
        cure: ["Fixitol Treat at Exam Table", "Unblock Kibble Chute Blockage"],
    },
    // Same symptoms but dog or cat cure
    derpy_doggy: {
        diff: "Easy",
        symptoms: ["extreme_lethargy", "sluggish_heartbeat", "inflamed_cuteness"],
        name: "Derpy Doggy",
        cure: ["Antifungal Spray at Exam Table", "Refill Nose Surgery"],
    },
    woozy_kittyitis: {
        diff: "Easy",
        symptoms: ["extreme_lethargy", "sluggish_heartbeat", "inflamed_cuteness"],
        name: "Woozy Kittyitis",
        cure: ["Eudemonia Concentrate at Exam Table", "Extract Cuteness Surgery"],
    },
    advanced_lavanose: {
        diff: "Medium",
        symptoms: ["glowing_nose", "rainbow_poop", "raspy_breath", "sweet_breath"],
        name: "Advanced Lava Nose",
        cure: ["Fixitol Treat at Exam Table", "Refill Nose Surgery"],
    },
    advanced_swampmouth: {
        diff: "Medium",
        symptoms: ["barfing", "uncontrollable_drooling", "low_temperature", "excessively_wet_nose"],
        name: "Advanced Swampmouth",
        cure: ["MedicineX at Exam Table"],
    },
    frosty_fur_flu: {
        diff: "Medium",
        symptoms: ["icy_fur", "low_temperature", "overly_moist_skin", "watery_eyes"],
        name: "Frosty Fur Flu",
        cure: ["Essence of Placebo from Exam Table", "Unblock Kibble Chute Blockage Surgery"],
    },
    frozen_mange: {
        diff: "Medium",
        symptoms: ["icy_fur", "low_temperature", "excessively_wet_nose", "stinky_fur"],
        name: "Frozen Mange",
        cure: ["Organic Disinfectant Spray from Exam Table", "Refill Nose Surgery"],
    },
    gilded_guts_disorder: {
        diff: "Medium",
        symptoms: ["golden_poop", "watery_eyes", "overly_moist_skin", "rapid_heartbeat"],
        name: "Gilded Guts Disorder",
        cure: ["Essence of Placebo at Exam Table", "Tum Tum Tickletangle Readjustment Surgery"],
    },
    magmafied_organs: {
        diff: "Medium",
        symptoms: ["glowing_nose", "hot_feet", "high_temperature", "rapid_heartbeat"],
        name: "Magmafied Organs",
        cure: ["Antiviral Payload Shot at Exam Table", "Refill Nose Surgery"],
    },
    overheated_sniffer: {
        diff: "Medium",
        symptoms: ["glowing_nose", "rainbow_poop", "dry_nose", "high_temperature"],
        name: "Overheated Sniffer",
        cure: ["Antifungal Treatment Spray at Exam Table", "Lubricate Joints Surgery"],
    },
    pyrotoes: {
        diff: "Medium",
        symptoms: ["hot_feet", "dry_nose", "high_temperature", "inflamed_cuteness"],
        name: "Pyrotoes",
        cure: ["Antifungal Treatment Spray at Exam Table", "Extract Cutness Surgery"],
    },
    repugnitis: {
        diff: "Medium",
        symptoms: ["stinky_fur", "fleas", "mouth_moths", "uncontrollable_drooling"],
        name: "Repugnitis",
        cure: ["Organic Disinfectant Spray at Treatment Table", "Tum Tum Tickletangle Readjustment Surgery"],
    },
    sizzlepaw: {
        diff: "Medium",
        symptoms: ["hot_feet", "dry_eyes", "high_temperature", "raspy_breath"],
        name: "Sizzlepaw",
        cure: ["Fixitol Treat at Exam Table", "Unblock Kibble Chute Blockage"],
    },
    squirrel_scratch_fever: {
        diff: "Medium",
        symptoms: ["uncontrollable_drooling", "extreme _lethargy", "sluggish_heartbeat", "ear_infection"],
        name: "Squirrel Scratch Fever",
        cure: ["Feelgood Serum at Exam Table", "Extract Cuteness Surgery"],
    },
    critical_hotfoot: {
        diff: "Hard",
        symptoms: ["hot_feet", "dry_eyes", "high_temperature", "raspy_breath", "dry_skin"],
        name: "Critical Hotfoot or Severe Hotfoot",
        cure: ["Antiviral Payload at Exam Table", "Lubricate Joint Surgery"],
    },
    critical_lavanose: {
        diff: "Hard",
        symptoms: ["glowing_nose", "rainbow_poop", "raspy_breath", "sweet_breath", "ear_infection"],
        name: "Critical Lava Nose",
        cure: ["Eudemonia Concentrate at Exam Table", "Refill Nose Surgery"],
    },
    tundra_hide: {
        diff: "Hard",
        symptoms: ["icy_fur", "watery_eyes", "excessively_wet_nose", "overly_moist_skin", "low_temperature"],
        name: "Tundra Hide",
        cure: ["MedicineX Treatment at Exam Table", "Lubricate Joint Surgery"],
    },
    slurry_fur: {
        diff: "Hard",
        symptoms: ["icy_fur", "low_temperature", "sweet_breath", "overly_moist_skin", "dry_eyes"],
        name: "Slurry Fur",
        cure: ["Tum Tum Tickletangle Readjustment Surgery"],
    },
    shortnose_fever: {
        diff: "Hard",
        symptoms: ["glowing_nose", "rainbow_poop", "raspy_breath", "sour_breath", "dry_eyes"],
        name: "Shortnose Fever",
        cure: ["Unblock Kibble Chute Blockage"],
    },
    super_repugnitis: {
        diff: "Hard",
        symptoms: ["barfing", "fleas", "mouth_moths", "stinky_fur", "uncontrollable_drooling"],
        name: "Super Repugnitis",
        cure: ["Tum Tum Tickletangle Readjustment Surgery"],
    },
    snortnose_fever: {
        diff: "Hard",
        symptoms: ["glowing_nose", "raspy_breath", "rainbow_poop", "sour_breath", "dry_eyes"],
        name: "Snortnose Fever",
        cure: ["Unblock Kibble Chute Blockage"],
    },
    super_duper_swamp_mouth: {
        diff: "Hard",
        symptoms: [
            "barfing",
            "uncontrollable_drooling",
            "extreme_lethargy",
            "overly_moist_skin",
            "unstable_temperature",
        ],
        name: "Super-Duper Swamp Mouth",
        cure: ["Tum Tum Tickletangle Readjustment Surgery"],
    },
    throbpaw_disease: {
        diff: "Hard",
        symptoms: ["hot_feet", "dry_eyes", "high_temperature", "sour_breath", "ear_infection"],
        name: "Throbpaw Disease",
        cure: ["Feelgood Serum at Exam Table", "Refill Nose Surgery"],
    },
    nuclear_nose: {
        diff: "Hard",
        symptoms: ["glowing_nose", "raspy_breathing", "rainbow_poop", "sweet_breath", "ear_infection"],
        name: "Nuclear Nose",
        cure: ["Eudemonia Concentrate at Exam Table"],
    },
};

let vetSymptomRelateds = {
    // future list to add green font color to related symptoms
};

// combine the two ailment types into one list since
// the ailments are completely different
let allAilments = { ...docAilments, ...vetAilments };

// For the "New Patient" button onclick, clears all checks
let symptomsClearAll = function () {
    // remove the checks from all boxes
    $.each($("input[name='symptoms']:checked"), function () {
        $(this).prop("checked", false);
    });
    // remove the dimmer (fake disabled)
    enableBothSides();
    // clear the "Possible Diagnoses" list
    $("#diagnoses_info").html("No diagnosis available");
};

// for reset
let enableBothSides = function () {
    $("#vet_symptom_list").removeClass("dimmer");
    $("#doc_symptom_list").removeClass("dimmer");
};

// gets the type of symptom from the class name (docs or vets) and sets the other side disabled
let disableOtherSide = function (clickedElement) {
    // no assumptions
    if ($(clickedElement.target).hasClass("docs")) {
        $("#vet_symptom_list").addClass("dimmer");
    } else if ($(clickedElement.target).hasClass("vets")) {
        $("#doc_symptom_list").addClass("dimmer");
    }
};

// let vetSyms = $(".symptom.vets");
// let vetSymsArray = [];
// console.log(vetSyms[0].id);

// $(".symptom.vets").each(function (index) {
//     vetSymsArray.push(this.id);
//     //console.log(index + ": " + this.id);
// });

// vetSymsArray.sort();
// console.log(vetSymsArray)

/*
 * Attach a change event listener to the check boxes so that the diagnosis list will update when one is clicked
 */
$(".symptom").change(function (clickedElement) {
    let symptoms = [];
    let possibles = [];

    // check whether we have any symptoms selected atm
    if ($("input[name='symptoms']:checked").length === 0) {
        // no checks so reset as new
        enableBothSides();
        // clear the list but it's reset on entry so not needed
        symptoms = [];
    } else {
        enableBothSides();
        if (clickedElement) {
            disableOtherSide(clickedElement);
        }
    }

    // make a fresh list of symptoms
    // step through all of the checkboxes and make an array list of
    // the ones that are checked so we have a list of current symptoms
    $.each($("input[name='symptoms']:checked"), function () {
        symptoms.push($(this).val());
    });

    // key to the diagnosis algorithm:
    // essentially, all ailments are possible all the time and we eliminate ailments by checking
    // that all of the current symptoms are present in an ailment's symptom list
    // example: patient coughs - cough isn't an Itchy Plumbob symptom - we know Itchy Plumbob is not a possibility

    // this allIn returns a boolean after checking if all of our current
    // symptoms are present in a possible ailment and returns true only if they are
    let allIn = function (subset, master) {
        let allAreIn = true;
        for (let i = 0; i < subset.length; i++) {
            let itemIndex = master.indexOf(subset[i]);
            if (itemIndex === -1) {
                return false;
            }
        }
        return true;
    };

    // if we have any symptoms, loop through all of the ailments and make a list of possibles
    if (symptoms.length > 0) {
        for (var ailment in allAilments) {
            if (allIn(symptoms, allAilments[ailment].symptoms)) {
                //console.log(allAilments[ailment].cure.toString());
                let ailmentInfo =
                    "<span class='possibleAilmentName'>" +
                    allAilments[ailment].name +
                    "</span><br>" +
                    "<span class='possibleSymptomsList'>Related Symptoms: " +
                    allAilments[ailment].symptoms.join(", ") +
                    "</span>" +
                    "<br>" +
                    "<span class='possibleCureList'>Related Cure: " +
                    allAilments[ailment].cure.join(", ") +
                    "</span><br>";
                possibles.push(ailmentInfo);
            }
        }
    }

    // if we got any possible ailments, display them, otherwise, let the user know we don't have any results
    if (possibles.length > 0) {
        $("#diagnoses_info").html(possibles.join("<br>"));
    } else {
        $("#diagnoses_info").html("No diagnosis available");
    }
});
