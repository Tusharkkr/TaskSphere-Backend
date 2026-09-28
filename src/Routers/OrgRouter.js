const express = require("express")
const IsLoggedIn = require("../Middleware/IsLoggedIn")
const { IsAuthorize } = require("../Middleware/IsAuthorize")
const { createOrg, getAllOrg, getSingleOrg, SoftdeleteOrg, EditOrg, createAdmin, AllAdmins, SingleAdmin, ActivateAdmin, DeActivateAdmin } = require("../Controller/OrgOwner")
const router = express.Router()


//! Creating Organization

router.post('/create-org',IsLoggedIn,IsAuthorize('owner'),createOrg)
router.get('/getall-org',IsLoggedIn,IsAuthorize('owner'),getAllOrg)
router.get('/getsingle-org/:id',IsLoggedIn,IsAuthorize('owner'),getSingleOrg)
router.delete('/softdel-org/:id',IsLoggedIn,IsAuthorize('owner'),SoftdeleteOrg)
router.patch('/edit-org/:id',IsLoggedIn,IsAuthorize('owner'),EditOrg)


//! Creating Admin in Organization

router.post('/create-org-admin/:id',IsLoggedIn,IsAuthorize('owner'),createAdmin)
router.get('/all-admin/:id',IsLoggedIn,IsAuthorize('owner'),AllAdmins)
router.get('/single-admin/:id',IsLoggedIn,IsAuthorize('owner'),SingleAdmin)
router.patch('/activate-admin/:id',IsLoggedIn,IsAuthorize('owner'),ActivateAdmin)
router.patch('/deactivate-admin/:id',IsLoggedIn,IsAuthorize('owner'),DeActivateAdmin)


module.exports = {
    OrgRouter : router
}