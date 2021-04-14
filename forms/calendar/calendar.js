var source = []
newEvents = []
deletedEvents = []

function Main() {
  StartScheduler()
}

function StartScheduler() {
  $("#Scheduler1").jqxScheduler({
    editDialogCreate: function(dialog, fields, editAppointment) {
      fields.repeatContainer.hide();
      fields.statusContainer.hide();
      fields.timeZoneContainer.hide();
      //fields.colorContainer.hide();

      fields.subjectLabel.html("Subject");
      fields.locationLabel.html("Location");
      //fields.location.hide();
      fields.fromLabel.html("Start");
      fields.toLabel.html("End");
      //fields.resourceLabel.html("calendar");
    },

    appointmentDataFields: {
      // fields to be set by user when scheduling new event
      from: "Start",
      to: "End",
      id: "id",
      description: "description",
      subject: "subject",
      location: "location",
      color: "color"
    },

    views: [
      'dayView',
      'weekView',
      'monthView',
      'agendaView'
    ]
  })

  appointments = [] // hold all appointments in this
  // make existing appts to be displayed

  appointment1 = {
    id: "id1",
    description: "Department Mtg",
    subject: "Project Discussion",
    location: "4040",
    Start: new Date("02/26/2020 07:00:00"),
    End: new Date("02/26/2020 08:00:00"),
    color: "red"
  }

  appointment2 = {
    id: "id2",
    description: "Faculty Mtg",
    subject: "New Curriculum",
    location: "3023",
    Start: new Date("02/25/2020 15:00:00"),
    End: new Date("02/25/2020 17:00:00"),
    color: "green"
  }

  appointment3 = {
    id: "id3",
    description: "Deans Honor Roll",
    subject: "Student Nominations",
    location: "3023",
    //calender: "Not Sure",
    Start: new Date("02/22/2020 11:00:00"),
    End: new Date("02/22/2020 14:00:00"),
    color: "blue"
  }

  appointments[0] = appointment1;
  appointments[1] = appointment2;
  appointments[2] = appointment3;

  //prepare the data for application to the control
  // requires appts be in array
  source = [];
  source = {
    dataType: "array",
    dataFields: [{
        name: "id",
        type: "string"
      }, {
        name: "description",
        type: "string"
      }, {
        name: "subject",
        type: "string"
      }, {
        name: "location",
        type: "string"
      }, {
        name: "Start",
        type: "date"
      }, {
        name: "End",
        type: "date"
      }, {
        name: "color",
        type: "string"
      },],
      id: "id",
      localData: appointments
  };
  
  // create adapter/pointer that holds the data
  adapter = new $.jqx.dataAdapter(source);
  $("#Scheduler1").jqxScheduler({
    source: adapter
  });
  
  // not sure what this is for - 
  datum1 = new $.jqx.date(2020, 2, 25, 9, 0, 0);
  $("#Scheduler1").jqxScheduler({
    Date: datum1
  });
  $("#Scheduler1").jqxScheduler("ensureAppointmentVisible", "id3");
  
  // create the calender
  res = {
    colorScheme: "scheme05",
    dataField: "calendar",
    source: new $.jqx.dataAdapter(source)
  };

  $("#Scheduler1").jqxScheduler({
    resources: res
  });
  
  // make a new appt
  newAppointment4 = {
    id: "id4",
    description: "Meeting 4",
    subject: "New Topics",
    location: "4040",
    Start: new Date("02/25/2020 10:00:00"),
    End: new Date("02/25/2020 11:30:00"),
    color: "green"
  };
  
  // add new one to calendar - need to add and also add to an ongoing array
  $("#Scheduler1").jqxScheduler("addAppointment", newAppointment4);
  newEvents.push(newAppointment4)
  //console.log(`*** The new appt you added is ${newEvents[newEvents.length-1]}`)
  
  // code to delete an event
  //$("#Scheduler1").jqxScheduler('deleteAppointment', appointmentId);
  // code to get selected event
  var selection = $("#Scheduler1").jqxScheduler("getSelection");

  // default show in month view
  $("#Scheduler1").jqxScheduler({
    view: "monthView"
  });
  
}